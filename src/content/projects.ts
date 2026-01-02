export type Project = {
  title: string;
  description: string;
  stack: string[];
  image?: string; // caminho em /public
  links?: {
    demo?: string;
    github?: string;
    caseStudy?: string;
  };
};

export const projects: Project[] = [
  {
    title: "OGVColor",
    description:
      "Platform for color management and measurement flow. Dashboard, APIs and real-time integration.",
    stack: ["React.js", "Vite", "Django", "PostgreSQL", "C#", "WebSocket"],
    image: "/logo-ogv-color-expanded.png",
    links: {
      caseStudy: "https://ogvcolor.com/",
    },
  },
];
