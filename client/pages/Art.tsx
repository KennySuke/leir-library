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
    imageUrl: "govoryat_doma.png",
  },
  {
    id: "project-2",
    title: "Project 2",
    imageUrl: "vnedreniye_vozmozhno.png",
  },
  {
    id: "project-3",
    title: "Project 3",
    imageUrl: "zhivotinka-1.png",
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
          lg:px-16        /* ← боковые отступы десктоп */
        "
      >
        {/* 
          Контейнер с проектами.
          Его высота НЕ фиксирована — высота управляется внешними отступами main.
        */}
        <div className="w-full flex flex-col md:flex-row items-center pt-20 md:items-start justify-start w-full gap-5 md:gap-6 lg:gap-[20px]">
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
