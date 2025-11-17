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

      <main
        className="
          min-h-screen 
          flex 
          items-start

          px-4          /* мобильные отступы */
          md:px-8       /* планшет */
          lg:px-[134px] /* десктоп */
        "
      >
        {/* Контейнер проектов → теперь растянут в ширину и прижат к левому краю */}
        <div
          className="
            w-full
            flex
            flex-col md:flex-row
            justify-start      /* ← самое важное: начинать слева */
            items-start
            gap-5 md:gap-6 lg:gap-[20px]
            pt-20
          "
        >
          {projects.map((project) => (
            <a
              key={project.id}
              href={`/projects/${project.id}`}
              className="
                relative
                w-full
                md:w-[236px]

                aspect-[118/350]
                overflow-hidden
                transition-opacity
                hover:opacity-80
              "
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
