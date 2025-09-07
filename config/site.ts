export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "SFC",
      href: "/sfc",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "SFC",
      href: "/sfc",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
