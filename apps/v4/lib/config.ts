const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"

export const siteConfig = {
  name: "Prism ShadCN",
  url: siteUrl,
  ogImage: `${siteUrl}/opengraph-image.png`,
  description:
    "A source-owned UI system with opinionated defaults for engineers building with AI.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
  navItems: [
    {
      href: "/docs/installation",
      label: "Docs",
    },
    {
      href: "/docs/components",
      label: "Components",
    },
    {
      href: "/blocks",
      label: "Blocks",
    },
    {
      href: "/charts/area",
      label: "Charts",
    },
    {
      href: "/docs/directory",
      label: "Directory",
    },
    {
      href: "/create",
      label: "Customize",
    },
  ],
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
