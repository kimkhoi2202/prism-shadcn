# Prism ShadCN

Prism ShadCN is a DESIGN 170 high-fidelity prototype for a source-owned UI system with opinionated defaults for engineers building with AI.

![hero](apps/v4/public/opengraph-image.png)

## Prototype

The prototype refines the shadcn/ui documentation and component experience around a stronger visual point of view: better buttons, inputs, textareas, input groups, dropdown menus, dialogs, and empty states.

Key routes:

- `/` — project landing page
- `/docs/components` — component index
- `/docs/components/base/button` — representative component detail page
- `/create` — interactive customization flow

## Local Development

```bash
pnpm install --frozen-lockfile
NEXT_PUBLIC_APP_URL=http://localhost:3000 pnpm --filter=v4 exec next dev --turbopack --port 3000
```

## License

Licensed under the [MIT license](./LICENSE.md).
