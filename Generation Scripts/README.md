# Component Screenshot Capture Scripts

These scripts document how the generated component screenshots were created for the DESIGN 170 Homework 5.1 Figma prototype.

## Script Mapping

- `component-state-screenshots.mjs` creates the five PNG files in `../Component Screenshots`:
  - `Button States.png`
  - `Input States.png`
  - `Textarea States.png`
  - `Input Group States.png`
  - `Dropdown Menu States.png`

## Context

The screenshots come from the Next.js route `/component-states`, which renders the customized Prism ShadCN components from `apps/v4/styles/base-nova/ui`. The page is intentionally built as a clean capture board for Button, Input, Textarea, Input Group, and Dropdown Menu states.

## Regeneration

1. Start the app locally on port `3000`.
2. Run the script from the project root:

```bash
node "Generation Scripts/component-state-screenshots.mjs"
```

Set `COMPONENT_STATES_URL` if the route is hosted somewhere else:

```bash
COMPONENT_STATES_URL=https://example.com/component-states node "Generation Scripts/component-state-screenshots.mjs"
```

The script focuses or hovers relevant controls before capturing each component section so the interaction states are visible. Captures are generated at `deviceScaleFactor: 4` for sharper Figma placement.
