import { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectList } from "@/config/siteConfig";

export default function Art() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !containerRef.current) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const cards = container.querySelectorAll('[data-project-card]');
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main
        ref={containerRef}
        className="
          flex-1
          flex items-center justify-center
          w-full
          px-0 md:px-8 lg:px-16
          pt-40 md:pt-20
          pb-40 lg:pb-10
        "
      >
        {/* Desktop: horizontal layout */}
        <div className="hidden md:flex w-full items-center justify-start gap-5 md:gap-6 lg:gap-[20px]">
          {projectList.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="
                relative
                h-[682px]
                aspect-[118/383]
                overflow-visible
                transition-all duration-500
                hover:aspect-square
                group
              "
            >
              <div className="relative w-full h-full overflow-hidden">
                {/* Основное изображение */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                  style={{
                    filter: `grayscale(1) brightness(${project.grayscaleExposure})`,
                    objectPosition: `${project.cropX} ${project.cropY}`,
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
                  src="/stroke2.png"
                  alt="stroke overlay"
                  className="absolute top-0 object-cover left-0 pointer-events-none transition-all duration-500 h-full"
                  style={{ height: "100%", objectPosition: "left top" }}
                />
                <img
                  src="/stroke2.png"
                  alt="stroke overlay"
                  className="absolute top-0 object-cover right-0 pointer-events-none transition-all duration-500 h-full"
                  style={{ height: "100%", objectPosition: "right top" }}
                />

                {/* Название, выезжающее слева */}
                <div
                  className="
                    absolute bottom-0 left-0
                    bg-black px-9 py-4
                    transition-transform duration-500 ease-out
                    -translate-x-full
                    group-hover:translate-x-0
                    pointer-events-none
                  "
                >
                  <span className="text-white text-4xl lg:text-5xl font-normal whitespace-nowrap">
                    {project.title}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile: vertical scrolling layout */}
        <div className="flex md:hidden flex-col items-center gap-0 w-full max-w-md pt-20 pb-10">
          {projectList.map((project, index) => {
            const isActive = index === activeIndex;

            return (
              <a
                key={project.id}
                href={project.href}
                data-project-card
                className={`
                  relative
                  w-full
                  transition-all duration-500
                  ${isActive ? "aspect-square" : "aspect-[386/148]"}
                `}
                style={{
                  minHeight: isActive ? "386px" : "148px",
                }}
              >
                <div className="relative w-full h-full overflow-hidden border-[22px] border-black">
                  {/* Основное изображение */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{
                      filter: isActive
                        ? `grayscale(0) brightness(1)`
                        : `grayscale(1) brightness(${project.grayscaleExposure})`,
                      objectPosition: `${project.cropX} ${project.cropY}`,
                    }}
                  />

                  {/* Stroke поверх изображения */}
                  <img
                    src="/stroke2.png"
                    alt="stroke overlay"
                    className="absolute top-0 object-cover left-0 pointer-events-none transition-all duration-500 h-full w-1/2"
                    style={{ objectPosition: "left top" }}
                  />
                  <img
                    src="/stroke2.png"
                    alt="stroke overlay"
                    className="absolute top-0 object-cover right-0 pointer-events-none transition-all duration-500 h-full w-1/2"
                    style={{ objectPosition: "right top" }}
                  />

                  {/* Название */}
                  <div
                    className={`
                      absolute bottom-0 left-0
                      bg-black px-4 py-2
                      transition-all duration-500 ease-out
                      ${isActive ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
                    `}
                  >
                    <span className="text-white text-2xl font-normal whitespace-nowrap">
                      {project.title}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
