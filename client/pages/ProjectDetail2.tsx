import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ProjectDetail2() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="w-full">
        {/* Main content container */}
        <div className="flex flex-col items-center gap-5 lg:gap-20 md:gap-32 pt-40 lg:pt-[200px] pb-20">
          {/* Hero Section */}
          <div className="flex flex-col items-center gap-0 w-full">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full lg:pl-[150px]">
              {/* Left content */}
              <div className="flex flex-col px-5 lg:px-0 gap-8 w-full lg:w-[55%] order-2 lg:order-1">
                {/* Title and year */}
                <div className="flex flex-col gap-0">
                  <h1 className="text-4xl md:text-5xl lg:text-[77px] font-bold leading-none">
                    ВНЕДРЕНИЕ ВОЗМОЖНО
                  </h1>
                  <div className="text-2xl md:text-3xl lg:text-[43px] font-bold">
                    2025
                  </div>
                </div>

                {/* Info box */}
                <div className="border-2 border-white/70 p-4 max-w-[70%] lg:max-w-[58%] md:p-6">
                  <div className="text-sm md:text-base lg:text-xl ">
                    <span className="font-bold text-lg md:text-xl">
                      Leir, федя лакихил
                    </span>
                    <br />
                    <span className="text-lg md:text-xl">
                      Интерактивная инсталляция
                    </span>
                    <br />
                    <span className="text-sm md:text-base">
                      Аналоговые камеры видеонаблюдения, подверженные
                      circuit-bending, видеомониторы, DIY управляющая плата
                      (15х10х5 см), объект (15х15х15 см, 3D-печать, гипс),
                      фоторезистор
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="text-base md:text-lg lg:text-xl text-justify leading-relaxed max-w-[90%]">
                  <p className="mb-4">
                    Работа является site-specific для выставки глитч-арта в
                    галерее Краснохолмская. Глитч - ошибка в системе, которая
                    создана человеком. Рассматривая институцию галереи, как
                    систему с присущими ей правилами, художники размышляют о
                    социальных «сбоях», как выход за рамки данной системы.
                  </p>
                  <p>
                    При "краже" объекта-символа пространства галереи типа «белый
                    куб» и системы правил, связанных с восприятием и
                    демонстрацией искусства, зритель ломает инсталляцию -
                    визуальные артефакты пропадают с телевизоров. В пространстве
                    выставки, суть которой демонстрация ошибки, присутствие
                    чистого изображения и есть ошибка.
                  </p>
                </div>
              </div>

              {/* Right image */}
              <div className="w-full lg:w-[40%] order-1 lg:order-2">
                <img
                  src="/image 1.png"
                  alt="Installation view"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Arrow down */}
            <div className="hidden lg:block mt-8 md:mt-12">
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
                src="https://player.vimeo.com/video/1138207770"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Two images with text */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-2 w-full">
            <img
              src="/Последовательность 01.gif"
              alt="Detail view 1"
              className="lg:w-[30%] h-auto object-cover"
            />

            <div className="text-base lg:w-[30%]  md:text-lg lg:text-xl text-justify leading-relaxed">
              <p className="mb-4">
                Инсталляция состоит из 3 телевизоров, с трансляцией на них
                искаженных изображений с аналоговых камер видеонаблюдения,
                которые размещены в ближайшем пространстве в галерее. Камеры
                подвержены circuit-bending.
              </p>
              <p>
                Circuit-bending - это творческий, основанный на принципах
                случайности метод модификации схем электронных устройств —
                низковольтных гитарных эффектов на батарейках, детских игрушек,
                цифровых синтезаторов, и в данном случае видеокамер — для
                создания новых музыкальных или визуальных инструментов и
                генераторов.
              </p>
            </div>

            <img
              src="/Последовательность 01_3.gif"
              alt="Detail view 2"
              className="lg:w-[30%] h-auto object-cover"
            />
          </div>

          {/* Text with image */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 lg:gap-12 w-full lg:pl-[150px]">
            <div className="w-full lg:w-[30%] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              <p className="mb-4">
                В процессе создания работы производилось замыкание различных
                контактов на матрицах камер. Так как процесс поиска глитча
                подразумевает эксперимент, не предусмотренный производителем
                устройства, не все замыкания могут быть безопасны для него.
                Соответственно, в процессе исследования возможностей матрицы
                несколько плат претерпели неисправимые изменения -{" "}
                <span className="font-bold">сгорели</span>, если кратко.
              </p>
              <p>
                Для управления найденными визуальными артефактами была
                разработана специальная схема на базе Arduino, регулирующая
                подачу навряжения на контакты матриц. (В процессе перепайки
                камер было выяснено, что необязательно замыкать контакты матриц,
                достаточно подать внешнее напряжение на них.)
              </p>
            </div>

            <img
              src="/photo_2025-11-18_21-48-12.jpg"
              alt="Circuit boards"
              className="w-full lg:w-[65%] h-auto object-cover"
            />
          </div>

          {/* Bio section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-12 w-full max-w-7xl">
            <div className="w-full lg:w-[45%] text-base md:text-lg lg:text-xl text-justify leading-relaxed">
              <p className="mb-4">
                Работа была сделана в соавторстве с Федей Лакихилом.
              </p>
              <p>
                Федя Лакихил — художник сферы новых медиа из России, родился и
                вырос в городе Люберцы, живет и работает в Москве. Окончил в
                2024 году магистратуру ArtTech — «Технологическое искусство»
                НИТУ МИСИС. Работает в практике глитч-арта, создавая
                инсталляции, фото- и видеоработы. Его работы выставлялись в
                таких галереях, как РОСИЗО, Краснохолмская, ГРАУНД Солянка, ЗИЛ
                (Москва), Волна (Выкса).
              </p>
            </div>

            <img
              src="/photo_2025-11-18_22-11-13.png"
              alt="Artist photo"
              className="w-full lg:w-[50%] h-auto object-cover"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
