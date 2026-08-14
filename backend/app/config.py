from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    app_name: str = "Virtual GeoTwinVerse"
    app_version: str = "0.1.0"
    debug: bool = False
    api_prefix: str = "/api/v1"

    secret_key: str = "geotwinverse-dev-secret-change-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24

    database_url: str = "sqlite:///./geotwinverse.db"
    redis_url: str = "redis://localhost:6379/0"

    cors_origins: str = "http://localhost:3000,http://127.0.0.1:3000"

    openai_api_key: str = ""
    cesium_ion_token: str = ""
    copernicus_user: str = ""
    copernicus_password: str = ""

    @property
    def origins(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]

    @property
    def is_sqlite(self) -> bool:
        return self.database_url.startswith("sqlite")


@lru_cache
def get_settings() -> Settings:
    return Settings()
