import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectList } from "@/config/siteConfig";

export default function Art() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main
        className="
          min-h-screen flex items-center
          flex items-start justify-center
          px-4 md:px-8 lg:px-16
        "
      >
        <div className="w-full flex flex-col md:flex-row items-center pt-20 md:items-start justify-start gap-5 md:gap-6 lg:gap-[20px]">

          {projectList.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="
                relative
                w-full
                md:w-[210px]
                aspect-[118/383]
                overflow-hidden
              "
            >
              {/* Основное изображение */}
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-full object-cover
                  transition duration-500
                "
                style={{
                  filter: `grayscale(1) brightness(${project.grayscaleExposure})`,
                  objectPosition: `${project.cropX} center`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    `grayscale(0) brightness(1)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.filter =
                    `grayscale(1) brightness(${project.grayscaleExposure})`;
                }}
              />

              {/* Stroke поверх изображения */}
              <img
                src="/stroke.png"
                alt="stroke overlay"
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
              />
            </a>
          ))}

        </div>
      </main>

      <Footer />
    </div>
  );
}
