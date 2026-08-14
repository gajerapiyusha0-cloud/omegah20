# Haptic layer

Software owns all cues. Hardware is an output device, never a requirement.

| Category | IDs |
| --- | --- |
| Navigation | `nav.surface_transition` … `nav.portal` |
| Selection | `sel.button` … `sel.save` |
| Environment | `env.rain` … `env.volcano` |
| Education | `edu.molecule` … `edu.stress` |
| Collaboration | `col.incoming` … `col.custom` |

Client playback: `frontend/lib/haptic.ts`.
Server catalog: `GET /api/v1/haptics/patterns`.
