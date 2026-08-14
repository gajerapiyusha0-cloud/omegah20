from urllib.parse import quote

from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.config import get_settings
from app.database import get_db
from app.models import User
from app.schemas import TokenResponse, UserCreate, UserPublic
from app.security import create_access_token, decode_token, hash_password, verify_password

router = APIRouter(prefix="/auth", tags=["auth"])
oauth2 = OAuth2PasswordBearer(tokenUrl="/api/v1/auth/login", auto_error=False)


def get_current_user(
    token: str | None = Depends(oauth2),
    db: Session = Depends(get_db),
) -> User | None:
    if not token:
        return None
    email = decode_token(token)
    if not email:
        return None
    return db.query(User).filter(User.email == email).first()


@router.post("/register", response_model=UserPublic)
def register(payload: UserCreate, db: Session = Depends(get_db)) -> User:
    if db.query(User).filter(User.email == payload.email).first():
        raise HTTPException(status_code=409, detail="Email already registered")
    user = User(
        email=payload.email,
        hashed_password=hash_password(payload.password),
        display_name=payload.display_name,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


@router.post("/login", response_model=TokenResponse)
def login(form: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)) -> TokenResponse:
    user = db.query(User).filter(User.email == form.username).first()
    if not user or not verify_password(form.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return TokenResponse(access_token=create_access_token(user.email))


@router.get("/oidc/start")
def oidc_start() -> dict:
    settings = get_settings()
    if not settings.oidc_issuer or not settings.oidc_client_id:
        return {
            "configured": False,
            "authorization_url": None,
            "note": "Set OIDC_ISSUER and OIDC_CLIENT_ID to enable campus SSO.",
        }
    issuer = settings.oidc_issuer.rstrip("/")
    url = (
        f"{issuer}/authorize?response_type=code&client_id={settings.oidc_client_id}"
        f"&redirect_uri={quote(settings.oidc_redirect_uri, safe='')}&scope=openid%20profile%20email"
    )
    return {"configured": True, "authorization_url": url}


@router.get("/oidc/callback", response_model=TokenResponse)
def oidc_callback(code: str = Query(...), db: Session = Depends(get_db)) -> TokenResponse:
    settings = get_settings()
    if not settings.oidc_issuer or not settings.oidc_client_id:
        raise HTTPException(status_code=400, detail="OIDC is not configured")
    import httpx

    token_url = f"{settings.oidc_issuer.rstrip('/')}/token"
    try:
        response = httpx.post(
            token_url,
            data={
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": settings.oidc_redirect_uri,
                "client_id": settings.oidc_client_id,
            },
            timeout=8.0,
        )
        response.raise_for_status()
        payload = response.json()
    except Exception as exc:
        raise HTTPException(status_code=401, detail=f"OIDC token exchange failed: {exc}") from exc
    id_token = payload.get("id_token") or payload.get("access_token")
    if not id_token:
        raise HTTPException(status_code=401, detail="OIDC response missing token")
    claims = decode_token_unverified(id_token)
    email = str(claims.get("email") or claims.get("sub") or "")
    if not email:
        raise HTTPException(status_code=401, detail="OIDC token missing email")
    user = db.query(User).filter(User.email == email).first()
    if not user:
        user = User(email=email, hashed_password=hash_password(f"oidc:{email}"), display_name=str(claims.get("name") or "SSO Explorer"))
        db.add(user)
        db.commit()
    return TokenResponse(access_token=create_access_token(user.email))


def decode_token_unverified(token: str) -> dict:
    from jose import jwt

    return jwt.get_unverified_claims(token)


@router.get("/me", response_model=UserPublic)
def me(user: User | None = Depends(get_current_user)) -> User:
    if not user:
        raise HTTPException(status_code=401, detail="Not authenticated")
    return user
