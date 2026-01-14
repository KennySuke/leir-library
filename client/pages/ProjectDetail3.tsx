import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
                    Советские транзисторы, электромагнитная катушка, вибромоторы, динамик, силикон, DIY транзисторные усилители звука
                  </div>
                </div>

                {/* Description */}
                <div className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                  Проект исследует границы эмпатии: какие существа могут восприниматься как «достаточно человечные», а какие остаются за пределами принятия. Также он затрагивает вопрос распространения человеческих норм, включая представления о красоте, на другие виды, даже те, что традиционно исключены из антропоцентричного взгляда на мир.
                </div>
              </div>

              {/* Right image */}
              <div className="w-full lg:w-[756px] order-1 lg:order-2">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b6e198f100d08b444644fc8672bbcc1a795db358?width=1512"
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

          {/* Section 2: Tall image + text */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full px-4 lg:px-[246px]">
            <div className="w-full aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1154492549"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full lg:w-[592px] aspect-[592/1052] object-cover"
              />
            </div>

            <div className="w-full  text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              <p>
                Работа над данным проектом была инициирована интуитивно. Импульсом послужила случайная находка на барахолке <span className="font-bold">старые советские транзисторы</span>, форма которых вызвала ассоциации с возможностью создания некоего <span className="font-bold">ручного существа</span>. Эта идея легла в основу дальнейшего развития.
              </p>
              <br />
              <p>
                В процессе разработки и обсуждений с коллегами автор начала рефлексировать над собственными побуждениями, стоявшими за этим замыслом. В ходе анализа стало очевидно, что в современной культуре наблюдается устойчивая тенденция к <span className="font-bold">очеловечиванию домашних животных</span>. Параллельно с этим в сферу, связанную с уходом и содержанием животных, постепенно проникают стандарты <span className="font-bold">конвенциональной красоты</span>, аналогичные тем, что давно укоренились в отношении человека.
              </p>
            </div>
          </div>

          {/* Section 3: Text + wide image */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 w-full px-4 lg:pl-[150px] lg:pr-0">
            <div className="w-full lg:w-[550px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              <p>
                Проектное существо, напротив, преднамеренно обращается к образу членистоногого - - собирательному облику многоножки, существа, которое в массовом восприятии вызывает <span className="font-bold">отвращение</span>. Тем самым ставится под сомнение антропоцентричная эстетика, доминирующая в восприятии живого. Несмотря на кажущуюся универсальность человеческих критериев, в пространство "околочеловеческого" начинают проникать образы иные <span className="font-bold">биологически чуждые</span>, но наделяемые эмоциональной окраской и проекциями.
              </p>
              <br />
              <p>
                Вторая линия размышлений, возникшая в процессе работы, касается вопроса <span className="font-bold">границ восприятия живого</span>. Где проходит черта, позволяющая воспринимать существо как одушевлённое, достойное эмпатии? Кто ещё может быть включён в зону "человечного" и каким образом это происходит? Эти вопросы стали ключевыми в развитии концепции проекта.
              </p>
            </div>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/1a40fafab7b07b9e536ffd107172f84e3f757a6e?width=2132"
              alt="Close-up view"
              className="w-full lg:w-[1066px] aspect-[1066/599] object-cover"
            />
          </div>

          {/* Gallery of vertical images */}
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-left gap-4 lg:gap-[42px] w-full px-4 overflow-x-auto">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/a13a29c6310043eae83d7e62c62f5a9834c87ecc?width=580"
              alt="Gallery image 1"
              className="w-[9%] aspect-[290/1152] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/706ee648871ba2b158c10652f410af5210ed7f41?width=1018"
              alt="Gallery image 2"
              className="w-[15%] aspect-[509/1119] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/ae554a15bf33b15e573c65e8fca188c2fd907e07?width=1112"
              alt="Gallery image 3"
              className="w-[18%] aspect-[556/950] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/934ea473b1bf9ecd95ab3fbbea02d65fa92e5d60?width=658"
              alt="Gallery image 4"
              className="w-[12%] aspect-[329/988] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/30fa9bca7ecdad0766bfad646e010615ce16fe8a?width=750"
              alt="Gallery image 5"
              className="w-[14%] aspect-[375/985] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/86c900afd85ec09f4010c125a54c2144e9a81992?width=718"
              alt="Gallery image 6"
              className="w-[12%] aspect-[359/1074] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/9001e0a815ce23f0dab678aba415219b98360f39?width=1196"
              alt="Gallery image 7"
              className="w-[19%] aspect-[598/988] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/561c92a93adfad7b83d8ba8f8c10a2eed9c665f2?width=692"
              alt="Gallery image 8"
              className="w-[12%] aspect-[346/1160] object-cover flex-shrink-0"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e732a5e1fea74aba1e3ab0e68bb1c2bf73087fe4?width=878"
              alt="Gallery image 9"
              className="w-[15%] aspect-[439/1160] object-cover flex-shrink-0"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
