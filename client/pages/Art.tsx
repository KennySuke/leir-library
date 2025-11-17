import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "Project 1",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/f7c9085ae19d6144e69536dc179f075481103d7a?width=472",
  },
  {
    id: "project-2",
    title: "Project 2",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/3a9ed9c979d7464ff7e2dc46a4f2109d0163d943?width=472",
  },
  {
    id: "project-3",
    title: "Project 3",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/5b9d7ef61101dfcee3265d31a2e5885494984675?width=472",
  },
];

export default function Art() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      {/* 
        MAIN HEIGHT:
        `h-screen` заставляет этот блок занимать ровно высоту экрана
      */}
      <main
        className="
          min-h-screen flex items-center
          flex
          items-start
          justify-center
      
          px-4                 /* ← боковые отступы мобилка */
          md:px-8              /* ← боковые отступы планшет */
          lg:px-[134px]        /* ← боковые отступы десктоп */
        "
      >
        {/* 
          Контейнер с проектами.
          Его высота НЕ фиксирована — высота управляется внешними отступами main.
        */}
        <div className="w-full flex flex-col md:flex-row items-center pt-20 md:items-start justify-center gap-5 md:gap-6 lg:gap-[20px] max-w-[748px]">
          {projects.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.id}`}
              className="
                relative
                w-full
                md:w-[236px]

                aspect-[118/350]      /* ← соотношение сторон */
                overflow-hidden
                transition-opacity
                hover:opacity-80
              "
              style={{
                strokeWidth: "22px",
                stroke: "#000",
              }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
