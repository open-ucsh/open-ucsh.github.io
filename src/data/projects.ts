export interface Project {
  title: string;
  description: string;
  href: string;
  preview: "venn" | "er";
}

export const projects: Project[] = [
  {
    title: "Diagrama de Venn",
    description: "Explora conjuntos visualmente.",
    href: "https://github.com/open-ucsh/web-diagrama-de-venn",
    preview: "venn",
  },
  {
    title: "Modelo ER",
    description: "Diseña tus modelos de datos.",
    href: "https://github.com/open-ucsh/web-modelador-bd",
    preview: "er",
  },
];
