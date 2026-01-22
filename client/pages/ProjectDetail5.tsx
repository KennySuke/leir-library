import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurUpImage from "@/components/BlurUpImage";

export default function ProjectDetail5() {
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
                    ARTIST GUMMIES
                  </h1>
                  <div className="text-2xl md:text-3xl lg:text-[43px] font-bold">
                    2025
                  </div>
                </div>

                {/* Info box */}
                <div className="border-2 border-white/70 p-4 lg:px-[21px] lg:py-[16px] w-full lg:w-[545px]">
                  <div className="text-lg lg:text-xl mb-0">
                    <span className="font-bold">
                      Leir,&nbsp;
                      <a
                        className="underline decoration-white underline-offset-2 hover:opacity-80 transition-opacity"
                        href="https://kertanov.cc/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Виктор Кертанов
                      </a>
                      ,
                      <br />
                      <a
                        className="underline decoration-white underline-offset-2 hover:opacity-80 transition-opacity"
                        href="https://dariasetevinets.com/main"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Дарья Сетевинец
                      </a>
                      ,
                      <br />
                      <a
                        className="underline decoration-white underline-offset-2 hover:opacity-80 transition-opacity"
                        href="https://www.temposasha.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Сизенов Александр
                      </a>
                    </span>
                    <br />
                    <span className="font-normal">
                      Объект (1 шт.), 100х55x55 мм
                    </span>
                  </div>
                  <div className="text-sm lg:text-base mt-2">
                    Банка с мармеладом с клетками участников группы.
                    <br />
                    Хранить в холодильнике.
                  </div>
                </div>

                {/* Main description */}
                <div className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                  Центральной темой проекта «Artist Gummies» является критика
                  информационного и физического потребления.
                  <br />
                  <br />
                  Художники рассматривают одновременно несколько проблематик:
                  хрестоматийный Миф о Художнике как о неком Творце;
                  художественные выражения и объекты, где части тела, жидкости и
                  иной материал, производимый вследствие жизнедеятельности
                  человеческого организма, а именно – художника – становится
                  инструментом для создания физического высказывания. В
                  контексте современного стремления к "натурализации",
                  "экологичности" и "прогрессивности" с заботой о себе, группа
                  художников не обходит стороной и повсеместную практику
                  нативной рекламы БАДов, суперфудов и других «продуктов для
                  тела и разума».
                  <br />
                  <br />
                  Продвигаемый питательный товар превращается в "пищу" двойного
                  назначения — как буквально, так и символически.
                </div>
              </div>

              {/* Right image */}
              <div className="w-full lg:w-[1154px] order-1 lg:order-2">
                <BlurUpImage
                  src="/ProjectDetail5/main.png"
                  thumb="/thumbs/ProjectDetail5/main.png"
                  alt="Artist Gummies main"
                  className="w-full aspect-[1154/664] object-cover"
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

          {/* Vimeo player */}
          <div className="flex justify-center h-auto pb-10 w-full">
            <div className="w-full lg:w-[60%] aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1157363943"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Section: Lab image + Text + Rotated images */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full px-4">
            {/* Left lab image */}
            <BlurUpImage
              src="/ProjectDetail5/lab1.png"
              thumb="/thumbs/ProjectDetail5/lab1.png"
              alt="Laboratory work 1"
              className="w-full lg:w-[555px] aspect-[3/4] object-cover"
            />

            {/* Middle text */}
            <div className="w-full lg:w-[564px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              В апреле 2025 года мы, группа художников — Виктор Киртанов, Leir,
              Дарья Ситивинец и Сизенов Александр — собрались в лаборатории
              тканевой инженерии, чтобы воплотить в жизнь проект{" "}
              <span className="font-bold">«Артист Гамис»</span> или{" "}
              <span className="font-bold">«Мармелад художника»</span>. Это был
              не просто эксперимент с материалами или формой, а попытка{" "}
              <span className="font-bold">поставить под сомнение</span> само
              понятие <span className="font-bold">художественного объекта</span>
              , его ценности и границ.
            </div>

            {/* Right images (overlapping/rotated effect) */}
            <div className="relative w-full lg:w-[577px] h-[520px]">
              <BlurUpImage
                src="/ProjectDetail5/lab2.png"
                thumb="/thumbs/ProjectDetail5/lab2.png"
                alt="Laboratory work 2"
                className="absolute top-0 left-0 w-full lg:w-[484px] aspect-[484/461] object-cover"
              />
              <BlurUpImage
                src="/ProjectDetail5/lab4.png"
                thumb="/thumbs/ProjectDetail5/lab4.png"
                alt="Laboratory work 4"
                className="absolute top-0 right-0 w-[60%] lg:w-[444px] aspect-[222/347] object-cover transform rotate-[64deg] lg:-translate-y-12 lg:-translate-x-12"
              />
            </div>
          </div>

          {/* Section: Large image + Text */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 lg:gap-12 w-full lg:pr-[180px]">
            <div className="w-full lg:relative lg:left-0 lg:w-screen lg:-ml-4">
              <BlurUpImage
                src="/ProjectDetail5/guys2.png"
                thumb="/thumbs/ProjectDetail5/guys2.png"
                alt="Artists group"
                className="w-full aspect-[1468/685] object-cover"
              />
            </div>

            <div className="w-full lg:w-[564px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              Мы начали с вопроса:{" "}
              <span className="font-bold">
                что значит быть художником сегодня
              </span>
              , когда общество одержимо{" "}
              <span className="font-bold">потреблением</span> не только
              информации, но и <span className="font-bold">тел, идей</span>,
              даже <span className="font-bold">личностей</span>. Вдохновившись
              радикальными жестами Пьера Манзони, который когда-то предложил
              миру «дыхание художника» и «говно художника», мы решили пойти
              дальше — создать объект, в буквальном смысле{" "}
              <span className="font-bold">состоящий из нас самих</span>, из
              клеток наших тел.
            </div>
          </div>

          {/* Section: Text + Lab image */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full px-4 lg:pl-[180px]">
            <div className="w-full lg:w-[550px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              Работа в лаборатории стала для нас новым опытом. Каждый день мы
              фиксировали этапы: от забора биоматериала до культивирования
              клеток, от первых неудач до появления первых мармеладных форм. Мы
              изучали научные статьи о выделении и выращивании клеток кожи,
              разбирались в методах гомогенизации тканей и пробовали превратить
              научную процедуру в{" "}
              <span className="font-bold">художественный жест</span>.
            </div>

            <img
              src="/ProjectDetail5/lab3.gif"
              alt="Lab"
              className="w-full lg:w-[1066px] aspect-[533/300] object-cover"
            />
          </div>

          {/* Section: Lab image + Text */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full px-4 lg:px-[262px]">
            <BlurUpImage
              src="/ProjectDetail5/lab5.png"
              thumb="/thumbs/ProjectDetail5/lab5.png"
              alt="Laboratory work 5"
              className="w-full lg:w-[718px] aspect-[718/539] object-cover"
            />

            <div className="w-full lg:w-[550px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              Наши исследования были не только техническими, но и
              концептуальными. Мы обращались к опыту художников, работающих на
              стыке <span className="font-bold">искусства и биотехнологий</span>
              : от живых кукол и «бескровной кожи» Орона Каца и Ионат Дзур до
              проекта «Ауроборос» Оркана Тельхана, где искусственное мясо
              становится метафорой человеческой идентичности. Мы читали о
              сомнениях и разрывах между искусством и наукой, о том, как{" "}
              <span className="font-bold">
                искусство может не иметь смысла — и именно этим вызывать вопросы
              </span>
              .
            </div>
          </div>

          {/* Section: Text + Reels */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 w-full px-4 lg:px-[318px]">
            <div className="w-full lg:w-[365px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              В процессе работы мы всё больше осознавали: наш объект — это{" "}
              <span className="font-bold">не просто мармелад</span> из клеток, а{" "}
              <span className="font-bold">критика идеи потребления</span>.
              Современная культура предлагает нам бесконечный выбор продуктов
              для тела и разума: БАДы, суперфуды, натуральные и экологичные
              товары. Мы же предлагаем продукт двойного назначения — пищу,
              которую невозможно съесть, но которую можно поглотить
              символически: как идею, как вызов, как зеркало общества, в котором{" "}
              <span className="font-bold">
                даже художник становится товаром
              </span>
              .
            </div>

            <div className="w-full lg:w-[592px] aspect-video lg:aspect-[1/1] ml-auto">
              <iframe
                src="https://player.vimeo.com/video/1157362426"
                className="w-full h-full object-cover"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Section: Rotated portrait + Text */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full lg:pr-[180px] h-auto lg:h-[520px]">
            <div className="relative w-full lg:w-auto h-[420px] lg:h-[520px] flex items-center justify-center">
              <img
                src="/ProjectDetail5/me.gif"
                alt="Me"
                className="h-auto object-cover rotate-90 origin-center -ml-1"
              />
            </div>

            <div className="w-full lg:w-[550px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              «Артист Гамис» — это ироничный комментарий к мифу о художнике как
              о Творце, чьи{" "}
              <span className="font-bold">тело и биоматериал</span> становятся{" "}
              <span className="font-bold">
                инструментом для создания искусства
              </span>
              . Это объект, который хранится в холодильнике как нечто хрупкое и
              быстро портящееся — как сама человеческая{" "}
              <span className="font-bold">идентичность</span> в эпоху{" "}
              <span className="font-bold">тотального потребления</span>.
            </div>
          </div>

          {/* Final section: Text + Image */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 max-w-8xl">
            <div className="w-full lg:w-[610px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                Наш проект — это не только результат лабораторных экспериментов,
                но и размышление о границах искусства, о телесности, о том, как
                далеко можно зайти,{" "}
                <span className="font-bold">
                  превращая себя в объект для других
                </span>
                .
                <br />
                <br />
                <span className="font-bold">
                  Это мармелад, который невозможно попробовать на вкус, но
                  который невозможно забыть.
                </span>
            </div>
          
            <BlurUpImage
              src="/ProjectDetail5/guys.png"
              thumb="/thumbs/ProjectDetail5/guys.png"
              alt="Artists group final"
              className="w-full lg:w-[800px] aspect-[62/59] object-cover"
              />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
