import { useRef, useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurUpImage from "@/components/BlurUpImage";

const galleryImages = [
  { id: "1", src: "/ProjectDetail3/1.png", thumb: "/thumbs/ProjectDetail3/1.png", alt: "Gallery image 1", width: "w-[20%] lg:w-[9%]", aspect: "aspect-[290/1152]" },
  { id: "2", src: "/ProjectDetail3/2.png", thumb: "/thumbs/ProjectDetail3/2.png", alt: "Gallery image 2", width: "w-[36%] lg:w-[15%]", aspect: "aspect-[509/1119]" },
  { id: "3", src: "/ProjectDetail3/3.png", thumb: "/thumbs/ProjectDetail3/3.png", alt: "Gallery image 3", width: "w-[40%] lg:w-[18%]", aspect: "aspect-[556/950]" },
  { id: "4", src: "/ProjectDetail3/4.png", thumb: "/thumbs/ProjectDetail3/4.png", alt: "Gallery image 4", width: "w-[25%] lg:w-[12%]", aspect: "aspect-[329/988]" },
  { id: "5", src: "/ProjectDetail3/5.png", thumb: "/thumbs/ProjectDetail3/5.png", alt: "Gallery image 5", width: "w-[28%] lg:w-[14%]", aspect: "aspect-[375/985]" },
  { id: "6", src: "/ProjectDetail3/6.png", thumb: "/thumbs/ProjectDetail3/6.png", alt: "Gallery image 6", width: "w-[24%] lg:w-[12%]", aspect: "aspect-[359/1074]" },
  { id: "7", src: "/ProjectDetail3/7.png", thumb: "/thumbs/ProjectDetail3/7.png", alt: "Gallery image 7", width: "w-[38%] lg:w-[19%]", aspect: "aspect-[598/988]" },
  { id: "8", src: "/ProjectDetail3/8.png", thumb: "/thumbs/ProjectDetail3/8.png", alt: "Gallery image 8", width: "w-[24%] lg:w-[12%]", aspect: "aspect-[346/1160]" },
  { id: "9", src: "/ProjectDetail3/9.png", thumb: "/thumbs/ProjectDetail3/9.png", alt: "Gallery image 9", width: "w-[30%] lg:w-[15%]", aspect: "aspect-[439/1160]" },
];

function InfiniteGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayImages, setDisplayImages] = useState(galleryImages);

  useEffect(() => {
    const tripleImages = [...galleryImages, ...galleryImages, ...galleryImages];
    setDisplayImages(tripleImages);

    if (containerRef.current) {
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollLeft = containerRef.current.scrollWidth / 3;
        }
      }, 0);
    }
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      e.preventDefault();
      const scrollAmount = e.deltaY > 0 ? 500 : -500;
      container.scrollLeft += scrollAmount;

      checkInfiniteScroll();
    };

    const checkInfiniteScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const oneThirdWidth = container.scrollWidth / 3;
      const scrollPos = container.scrollLeft;

      if (scrollPos < oneThirdWidth * 0.2) {
        container.scrollLeft = scrollPos + oneThirdWidth;
      } else if (scrollPos > oneThirdWidth * 1.8) {
        container.scrollLeft = scrollPos - oneThirdWidth;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [displayImages]);

  return (
    <div
      ref={containerRef}
      className="flex flex-nowrap items-center justify-left gap-4 lg:gap-[42px] w-full px-4 overflow-x-auto"
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`
        div[data-gallery-scroll]::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {displayImages.map((image, index) => (
        <BlurUpImage
          key={`${image.id}-${index}`}
          src={image.src}
          thumb={image.thumb}
          alt={image.alt}
          className={`${image.width} ${image.aspect} object-cover flex-shrink-0`}
        />
      ))}
    </div>
  );
}

export default function ProjectDetail3() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="w-full">
        <div className="flex flex-col items-center gap-10 lg:gap-[120px] pt-40 lg:pt-[200px] pb-20">
          {/* Hero Section */}
          <div className="flex flex-col items-center gap-0 lg:gap-[-38px] w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 w-full px-4 lg:pl-[150px] lg:pr-0">
              {/* Left content */}
              <div className="flex flex-col gap-6 lg:gap-[30px] w-full lg:w-[866px] order-2 lg:order-1">
                {/* Title and year */}
                <div className="flex flex-col gap-0 lg:gap-[-2px]">
                  <h1 className="text-4xl md:text-5xl lg:text-[77px] font-bold leading-none">
                    ЖИВОТИНКА
                  </h1>
                  <div className="text-2xl md:text-3xl lg:text-[43px] font-bold">
                    2025
                  </div>
                </div>

                {/* Info box */}
                <div className="border-2 border-white/70 p-4 lg:p-[16px_21px] w-full lg:w-[545px]">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-lg lg:text-xl font-bold">
                      Leir
                      <br />
                      DIY устройство
                    </div>
                  </div>
                  <div className="text-sm lg:text-base">
                    27x6x4 см
                    <br />
                    Советские транзисторы, электромагнитная катушка,
                    вибромоторы, динамик, силикон, DIY транзисторные усилители
                    звука
                  </div>
                </div>

                {/* Description */}
                <div className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                  Проект исследует границы эмпатии: какие существа могут
                  восприниматься как «достаточно человечные», а какие остаются
                  за пределами принятия. Также он затрагивает вопрос
                  распространения человеческих норм, включая представления о
                  красоте, на другие виды, даже те, что традиционно исключены из
                  антропоцентричного взгляда на мир.
                </div>
              </div>

              {/* Right image */}
              <div className="w-full lg:w-[756px] order-1 lg:order-2">
                <BlurUpImage
                  src="/ProjectDetail3/main.png"
                  thumb="/thumbs/ProjectDetail3/main.png"
                  alt="ЖИВОТИНКА artwork"
                  className="w-full aspect-[756/707] object-cover"
                />
              </div>
            </div>

            {/* Arrow down */}
            <div className="hidden lg:block mt-0 lg:mt-[-38px]">
              <svg
                className="w-24 h-24 md:w-32 md:h-32 lg:w-[168px] lg:h-[187px]"
                viewBox="0 0 168 187"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M84 38.9583V148.042"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M133 93.5L84 148.042L35 93.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Section 2: Video + text */}
          <div className="flex flex-col lg:flex-row  items-center lg:items-left w-full gap-8 lg:gap-0 px-4 lg:px-[246px]">
            <div className="w-full aspect-video lg:aspect-[592/592]">
              <iframe
                src="https://player.vimeo.com/video/1154492549"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full lg:w-[592px] aspect-[1/1] object-cover"
              />
            </div>

            <div className="w-full lg:w-[564px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              <p>
                Работа над данным проектом была инициирована интуитивно.
                Импульсом послужила случайная находка на барахолке{" "}
                <span className="font-bold">старые советские транзисторы</span>,
                форма которых вызвала ассоциации с возможностью создания некоего{" "}
                <span className="font-bold">ручного существа</span>. Эта идея
                легла в основу дальнейшего развития.
              </p>
              <br />
              <p>
                В процессе разработки и обсуждений с коллегами автор начала
                рефлексировать над собственными побуждениями, стоявшими за этим
                замыслом. В ходе анализа стало очевидно, что в современной
                культуре наблюдается устойчивая тенденция к{" "}
                <span className="font-bold">очеловечиванию домашних животных</span>
                . Параллельно с этим в сферу, связанную с уходом и содержанием
                животных, постепенно проникают стандарты{" "}
                <span className="font-bold">конвенциональной красоты</span>,
                аналогичные тем, что давно укоренились в отношении человека.
              </p>
            </div>
          </div>

          {/* Section 3: Text + wide image */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full px-4 lg:pl-[150px] lg:pr-0">
            <div className="w-full lg:w-[550px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              <p>
                Проектное существо, напротив, преднамеренно обращается к образу
                членистоногого - - собирательному облику многоножки, существа,
                которое в массовом восприятии вызывает{" "}
                <span className="font-bold">отвращение</span>. Тем самым
                ставится под сомнение антропоцентричная эстетика, доминирующая в
                восприятии живого. Несмотря на кажущуюся универсальность
                человеческих критериев, в пространство "околочеловеческого"
                начинают проникать образы иные{" "}
                <span className="font-bold">биологически чуждые</span>, но
                наделяемые эмоциональной окраской и проекциями.
              </p>
              <br />
              <p>
                Вторая линия размышлений, возникшая в процессе работы, касается
                вопроса{" "}
                <span className="font-bold">границ восприятия живого</span>. Где
                проходит черта, позволяющая воспринимать существо как
                одушевлённое, достойное эмпатии? Кто ещё может быть включён в
                зону "человечного" и каким образом это происходит? Эти вопросы
                стали ключевыми в развитии концепции проекта.
              </p>
            </div>

            <BlurUpImage
              src="/ProjectDetail3/second.jpg"
              thumb="/thumbs/ProjectDetail3/second.jpg"
              alt="Close-up view"
              className="w-full lg:w-[1066px] aspect-[1066/599] object-cover"
            />
          </div>

          {/* Gallery of vertical images with infinite scroll */}
          <InfiniteGallery />
        </div>
      </main>

      <Footer />
    </div>
  );
}
