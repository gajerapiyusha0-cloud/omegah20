# Security

- Passwords: PBKDF2-SHA256
- Sessions: JWT HS256 (`SECRET_KEY`)
- CORS allow-list in production (`DEBUG=false`)
- Quiz answers are not returned on GET `/learn/quiz/{slug}`
- Optional secrets: `OPENAI_API_KEY`, `CESIUM_ION_TOKEN`, Copernicus credentials
- Haptics never require hardware; no device fingerprinting
