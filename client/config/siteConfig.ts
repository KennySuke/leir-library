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
  href: string;              // страница проекта
  image: string;             // путь к изображению
  grayscaleExposure: number; // 0 → нормальное, 1 → яркое, 2 → пересвечено
  shiftXPercent: number;     // смещение внутри плашки (-100..100)
}

export const projectList: ProjectConfig[] = [
  {
    id: "project-1",
    title: "Project 1",
    href: "/projects/project-1",
    image: "govoryat_doma.png",
    grayscaleExposure: 0.8, 
    shiftXPercent: 0,       
  },
  {
    id: "project-2",
    title: "Project 2",
    href: "/projects/project-2",
    image: "vnedreniye_vozmozhno.png",
    grayscaleExposure: 1.0,  
    shiftXPercent: 0,       
  },
  {
    id: "project-3",
    title: "Project 3",
    href: "/projects/project-3",
    image: "zhivotinka-1.png",
    grayscaleExposure: 1.0,   
    shiftXPercent: 0,        
  },
];
