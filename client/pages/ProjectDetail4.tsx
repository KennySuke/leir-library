import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlurUpImage from "@/components/BlurUpImage";

export default function ProjectDetail4() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="w-full">
        <div className="flex flex-col items-center gap-10 lg:gap-[120px] pt-40 lg:pt-[200px] pb-20">
          {/* Hero Section with Camera Frame */}
          <div className="flex flex-col items-center gap-0 lg:gap-[-38px] w-full">
            <div className="relative w-full max-w-[1668px] mx-auto px-4">
              {/* Camera frame background */}
              <div className="relative w-full aspect-[1668/938]">
                <BlurUpImage
                  src="/ProjectDetail4/eye_corner_frame.png"
                  thumb="/thumbs/ProjectDetail4/eye_corner_frame.png"
                  alt="Eye corner camera frame"
                  className="w-full h-full object-cover"
                />

                {/* Centered overlay content */}
                <div className="absolute inset-0 flex items-center justify-center px-4 md:px-8 lg:px-[199px] py-[126px]">
                  <div className="w-full max-w-[1306px] flex flex-col items-center justify-center gap-[10px]">
                    <div className="flex flex-col gap-6 lg:gap-[30px] w-full px-2 lg:px-[161px]">
                      {/* Title and year */}
                      <div className="flex flex-col gap-0 lg:gap-[-2px]">
                        <h1 className="text-4xl md:text-5xl lg:text-[77px] font-bold leading-none">
                          EYE CORNER
                        </h1>
                        <div className="text-2xl md:text-3xl lg:text-[43px] font-bold">
                          2024
                        </div>
                      </div>

                      {/* Info box */}
                      <div className="border-2 border-white/70 p-4 lg:px-[21px] lg:py-[16px] w-full max-w-[545px]">
                        <div className="flex justify-between mb-2">
                          <div className="text-lg lg:text-xl font-bold">
                            <span className="font-bold">Leir</span>
                            <br />
                            Интерактивная инсталляция
                          </div>
                        </div>
                        <div className="text-sm lg:text-base">
                          vvvv, openCV, экран, веб-камера, уличные камеры
                          видеонаблюдения, видеопотоки с 250 открытых камер
                          видеонаблюдения
                        </div>
                      </div>

                      {/* Main description */}
                      <div className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                        Проект Eye corner исследует концепцию цифрового
                        паноптикума через интерактивный опыт, где записи с
                        онлайн-камер видны только в периферийном зрении
                        посетителей, вызывая ощущение постоянного наблюдения и
                        тревоги. Этот метод символизирует, как цифровые
                        технологии становятся неотъемлемой частью нашего
                        подсознательного восприятия мира, создавая чувство
                        неуверенности и паранойи, и заставляет задуматься о
                        влиянии технологий на наше чувство свободы и
                        безопасности. Инсталляция также опирается на теорию
                        Мишеля Фуко о биополитике, подчеркивая, как методы
                        наблюдения и контроля становятся инструментами
                        управления и регулирования человеческого поведения на
                        уровне популяции.
                      </div>
                    </div>
                  </div>
                </div>
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
                src="https://player.vimeo.com/video/1156093692"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Section with 3 columns: image + text with keywords + image */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full px-4">
            {/* Left image */}
            <BlurUpImage
              src="/ProjectDetail4/2.png"
              thumb="/thumbs/ProjectDetail4/2.png"
              alt="Detail view 1"
              className="w-full lg:w-[581px] aspect-[581/327] object-cover"
            />

            {/* Middle text with keywords */}
            <div className="flex flex-col gap-3 lg:gap-[14px] w-full lg:w-[564px]">
              {/* Keyword 1 */}
              <div className="inline-flex px-1 py-0 bg-white w-fit">
                <span className="text-black text-lg lg:text-xl font-bold">
                  паноптикум
                </span>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                Тюрьма, в которой один наблюдатель может следить за всеми
                заключенными, не будучи видимым, создавая у них ощущение
                постоянного наблюдения. Повсеместные камеры и цифровые
                технологии позволяют государствам и корпорациям постоянно
                мониторить и анализировать действия и данные пользователей
              </p>

              {/* Keyword 2 */}
              <div className="inline-flex px-1 py-0 bg-white w-fit">
                <span className="text-black text-lg lg:text-xl font-bold">
                  в уголке глаза
                </span>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                Прием, когда что-то можно увидеть только в углу глаза, вызывает
                чувство беспокойства и паранойи, поскольку предполагает, что
                нечто зловещее скрывается на периферии их восприятия, оставаясь
                неуловимым при прямом взгляде.
              </p>
            </div>

            {/* Right image */}
            <BlurUpImage
              src="/ProjectDetail4/1.png"
              thumb="/thumbs/ProjectDetail4/1.png"
              alt="Detail view 2"
              className="w-full lg:w-[588px] aspect-square object-cover"
            />
          </div>

          {/* Large title section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full px-4 lg:px-[200px]">
            {/* Large title */}
            <div className="inline-flex px-1 pb-4 bg-white w-fit">
              <h2 className="text-4xl md:text-6xl lg:text-[96px] font-bold whitespace-nowrap text-black leading-[82.4%] max-w-[601px]">
                цифровой <br /> паноптикум
              </h2>
            </div>

            {/* Text */}
            <div className="w-full lg:w-[550px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              Проект Eye corner исследует концепцию цифрового паноптикума через
              интерактивный опыт, где записи с онлайн-камер видны только в
              периферийном зрении посетителей, вызывая ощущение постоянного
              наблюдения и тревоги. Этот метод символизирует, как цифровые
              технологии становятся неотъемлемой частью нашего подсознательного
              восприятия мира, создавая чувство неуверенности и паранойи, и
              заставляет задуматься о влиянии технологий на наше чувство свободы
              и безопасности. Инсталляция также опирается на теорию Мишеля Фуко
              о биополитике, подчеркивая, как методы наблюдения и контроля
              становятся инструментами управления и регулирования человеческого
              поведения на уровне популяции.
            </div>
          </div>

          {/* Online cameras section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full px-4 lg:pl-[198px] lg:pr-4">
            {/* Left text */}
            <div className="flex flex-col gap-3 lg:gap-[14px] w-full lg:w-auto">
              <div className="inline-flex px-1 py-0 bg-white w-fit">
                <span className="text-black text-lg lg:text-xl font-bold">
                  онлайн-камеры
                </span>
              </div>
              <p className="w-full lg:w-[550px] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
                Для работы был собран список из около 200 актуальных ссылок на
                общедоступные онлайн-камеры. Около 50 из них – камеры,
                расположенные в Москве, остальные распределены по всему миру.
              </p>
            </div>

            {/* Right image */}
            <BlurUpImage
              src="/ProjectDetail4/3.png"
              thumb="/thumbs/ProjectDetail4/3.png"
              alt="Online cameras grid"
              className="w-full lg:w-[1095px] aspect-[1095/569] object-cover"
            />
          </div>

          {/* Bottom gallery - 3 images */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 lg:gap-12 w-full px-4 lg:px-[87px] pt-0 lg:py-[128px]">
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/20">
              <iframe
                src="/api/camera/27"
                title="Installation live stream"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen"
              />
            </div>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/20">
              <BlurUpImage
              src="/ProjectDetail4/3.png"
              thumb="/thumbs/ProjectDetail4/3.png"
              alt="Online cameras grid"
              className="w-full lg:w-[1095px] aspect-[1095/569] object-cover"
            />
            </div>
            <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-white/20">
              <BlurUpImage
              src="/ProjectDetail4/3.png"
              thumb="/thumbs/ProjectDetail4/3.png"
              alt="Online cameras grid"
              className="w-full lg:w-[1095px] aspect-[1095/569] object-cover"
            />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
