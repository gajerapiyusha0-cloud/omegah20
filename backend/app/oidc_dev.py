"""Local campus SSO stand-in so OIDC can start without an external IdP."""

from __future__ import annotations

import time
from urllib.parse import urlencode

from fastapi import FastAPI, Form, HTTPException
from fastapi.responses import RedirectResponse
from jose import jwt

CLIENT_ID = "geotwinverse-dev"
ISSUER = "http://127.0.0.1:8081"
DEV_SECRET = "geotwinverse-oidc-dev-secret"
_CODES: dict[str, dict] = {}

app = FastAPI(title="GeoTwinVerse Dev OIDC", docs_url=None, redoc_url=None)


@app.get("/health")
def health() -> dict:
    return {"status": "ok", "issuer": ISSUER, "client_id": CLIENT_ID}


@app.get("/.well-known/openid-configuration")
def discovery() -> dict:
    return {
        "issuer": ISSUER,
        "authorization_endpoint": f"{ISSUER}/authorize",
        "token_endpoint": f"{ISSUER}/token",
        "userinfo_endpoint": f"{ISSUER}/userinfo",
        "response_types_supported": ["code"],
        "subject_types_supported": ["public"],
        "id_token_signing_alg_values_supported": ["HS256"],
    }


@app.get("/authorize")
def authorize(
    client_id: str,
    redirect_uri: str,
    response_type: str = "code",
    state: str = "",
    scope: str = "openid",
) -> RedirectResponse:
    if client_id != CLIENT_ID:
        raise HTTPException(status_code=400, detail="unknown client")
    if response_type != "code":
        raise HTTPException(status_code=400, detail="unsupported response_type")
    code = f"dev-{int(time.time())}-{len(_CODES)}"
    _CODES[code] = {"email": "explorer@geotwinverse.local", "name": "Explorer", "redirect_uri": redirect_uri}
    params = {"code": code}
    if state:
        params["state"] = state
    sep = "&" if "?" in redirect_uri else "?"
    return RedirectResponse(f"{redirect_uri}{sep}{urlencode(params)}")


@app.post("/token")
def token(
    code: str = Form(...),
    grant_type: str = Form("authorization_code"),
    redirect_uri: str = Form(""),
    client_id: str = Form(""),
) -> dict:
    rec = _CODES.pop(code, None)
    if not rec:
        raise HTTPException(status_code=400, detail="invalid_grant")
    now = int(time.time())
    claims = {
        "iss": ISSUER,
        "sub": rec["email"],
        "aud": CLIENT_ID,
        "email": rec["email"],
        "name": rec["name"],
        "iat": now,
        "exp": now + 3600,
    }
    id_token = jwt.encode(claims, DEV_SECRET, algorithm="HS256")
    return {"access_token": id_token, "id_token": id_token, "token_type": "bearer", "expires_in": 3600}


@app.get("/userinfo")
def userinfo() -> dict:
    return {"sub": "explorer@geotwinverse.local", "email": "explorer@geotwinverse.local", "name": "Explorer"}
