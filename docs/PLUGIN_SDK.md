# Plugin SDK

Implement `GeoTwinPlugin` from `backend/app/sdk/plugin.py`:

```python
from app.sdk.plugin import ExampleLoggingPlugin
plugin = ExampleLoggingPlugin()
plugin.enable()
```

Register new connectors in `backend/app/data/plugins.py` and they appear in `/api/v1/plugins`.
