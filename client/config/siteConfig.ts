export interface FooterLink {
  label: string;
  href?: string;
  bold?: boolean;
}

// Edit these links to change footer targets. "leir" is intentionally left without href.
export const footerLinks: FooterLink[] = [
  { label: "leir", bold: true },
  { label: "telegram", href: "https://t.me/KennyKso" },
  { label: "tg channel", href: "https://t.me/leirlibrary" },
  { label: "mail", href: "mailto:homepunkleir@gmail.com" },
];

// How many times to repeat the link group in the scrolling footer (for continuous effect)
export const footerRepeatCount = 8;

// src/config/projects.ts

export interface ProjectConfig {
  id: string;
  title: string;
  href: string; // страница проекта
  image: string; // путь к изображению
  grayscaleExposure: number; // 0 → нормальное, 1 → яркое, 2 → пересвечено
  cropX: string; // смещение внутри плашки (x%)
  cropY: string; // смещение внутри плашки (x%)
}

export const projectList: ProjectConfig[] = [
  {
    id: "project-1",
    title: "говорят дома",
    href: "/projects/project-1",
    image: "govoryat_doma.png",
    grayscaleExposure: 0.8,
    cropX: "79%",
    cropY: "center",
  },
  {
    id: "project-2",
    title: "внедрение возможно",
    href: "/projects/project-2",
    image: "vnedreniye_vozmozhno.png",
    grayscaleExposure: 1.0,
    cropX: "58%",
    cropY: "center",
  },
  {
    id: "project-3",
    title: "животинка",
    href: "/projects/project-3",
    image: "zhivotinka-1.png",
    grayscaleExposure: 1.0,
    cropX: "20%",
    cropY: "20%",
  },
  {
    id: "project-4",
    title: "eye corner",
    href: "/projects/project-4",
    image: "ProjectDetail4/eye_corner_main.png",
    grayscaleExposure: 1.0,
    cropX: "58%",
    cropY: "center",
  },
  {
    id: "project-5",
    title: "artist gummies",
    href: "/projects/project-5",
    image: "ProjectDetail5/main.png",
    grayscaleExposure: 1.0,
    cropX: "50%",
    cropY: "center",
  },
];
