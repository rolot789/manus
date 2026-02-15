# Armonia Excursions

## Architecture notes

- The previous Google Maps demo component was removed because the current product scope and routes only include static marketing/landing content (`/`), and there is no active map-driven user flow yet.
- To avoid unused maintenance surface and environment-key confusion, map-specific frontend configuration is intentionally not used in the current codebase.
- If map-based features are introduced later, re-add a route/page with a concrete product requirement and document required configuration together with rollout steps.
