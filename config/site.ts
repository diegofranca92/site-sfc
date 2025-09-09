export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Minha Jóia SFC | São Francisco do Conde - Bahia",
  description: "Descubra São Francisco do Conde - Bahia: história, cultura, eventos, oportunidades locais, blog com memórias e empreendedores da cidade.",
  navItems: [
    { label: "Início", href: "/" },
    { label: "Nossa Cidade", href: "/nossa-cidade" },
    { label: "Feito em SFC", href: "/feito-em-sfc" },
    { label: "Agenda de Rolês", href: "/agenda" },
    { label: "Oportunidades", href: "/oportunidades" },
    { label: "Blog", href: "/blog" },
  ],
  navMobileItems: [
    { label: "Início", href: "/" },
    { label: "Nossa Cidade", href: "/nossa-cidade" },
    { label: "Feito em SFC", href: "/feito-em-sfc" },
    { label: "Agenda de Rolês", href: "/agenda" },
    { label: "Oportunidades", href: "/oportunidades" },
    { label: "Blog", href: "/blog" },
    { label: "Logout", href: "/logout" },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
