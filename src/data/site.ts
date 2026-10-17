export const site = {
  name: "Open UCSH",
  description:
    "Una comunidad abierta para aprender, crear y compartir en la UCSH.",
  github: "https://github.com/open-ucsh",
};

export const footerGroups = [
  {
    title: "Comunidad",
    links: [
      {
        label: "Sobre nosotros",
        href: `${site.github}/.github/blob/main/profile/README.md`,
      },
      {
        label: "GitHub ↗",
        href: site.github,
      },
    ],
  },
  {
    title: "Participa",
    links: [
      {
        label: "Cómo contribuir",
        href: `${site.github}/.github/blob/main/CONTRIBUTING.md`,
      },
      {
        label: "Código de conducta",
        href: `${site.github}/.github/blob/main/CODE_OF_CONDUCT.md`,
      },
    ],
  },
];
