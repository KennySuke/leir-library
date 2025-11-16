import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { footerLinks, footerRepeatCount } from "@/config/siteConfig";

export default function Index() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <main>
        {/* Scrollable Container */}
        <div className="lg:hidden relative z-20 overflow-auto px-0 mt-[60vh]">
          {/* Transparent Rectangle on Top */}
          <div className=" -top-40 left-0 w-full h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none z-20" />

          {/* Text Box Below */}
          <div className="relative z-20 flex flex-col gap-6 px-6 text-text-main bg-black/70">
            <p>
              Leir, междисциплинарная художница, родилась в 2001 году в Новомосковске, живёт и работает в Москве.
            </p>
            <p>
                Художественная практика включает DIY-электронику, звуковые эксперименты, интерактивные инсталляции и AV-перформансы. В своих работах художница изучает развитие систем власти, порождающих структуры подчинения в расширенном социальном поле.
            </p>
            <p>
                В настоящее время исследует возможности создания непрерывной системы из световой, графической и аудиальной составляющих для формирования зрительского опыта в перформативном пространстве.
            </p>
          </div>
          <div className=" -top-40 left-0 w-full h-40 bg-black/70 z-20" />
        </div>

        {/* Fixed Background Image for Mobile */}
        <div className="lg:hidden fixed top-[20%] left-0 w-full z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f16ebf025ccd406f25a24d211cf6e69963cce7ee"
            alt="Leir portrait"
            className="w-full h-full object-cover"
          />
        </div>



        <div className="hidden lg:flex-1 lg:flex items-center justify-center px-4 md:px-8 lg:px-[20px] py-12 md:py-16 lg:py-[200px]">
          <div className="w-full max-w-[1474px] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 lg:gap-[36px] items-center">
            {/* Left Text */}
            <div className="text-text-main text-sm md:text-lg lg:text-2xl text-center leading-normal order-1 lg:order-1 self-start text-justify">
              Leir, междисциплинарная художница, родилась в 2001 году в Новомосковске, живёт и работает в Москве.
              <br /><br />
              Художественная практика включает DIY-электронику, звуковые эксперименты, интерактивные инсталляции и AV-перформансы. В своих работах художница изучает развитие систем власти, порождающих структуры подчинения в расширенном социальном поле.
            </div>

            {/* Center Image */}
            <div className="flex justify-center order-2 lg:order-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f16ebf025ccd406f25a24d211cf6e69963cce7ee?width=876"
                alt="Leir portrait"
                className="w-[80%] md:w-[90%] lg:w-[100%] aspect-[3/4] object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="grid grid-rows-[auto_auto] gap-4 order-3 self-end">
              {/* Верхняя строка */}
              <div className="text-text-main text-sm md:text-lg lg:text-2xl text-center leading-normal self-end text-justify">
                В настоящее время исследует возможности создания непрерывной системы из световой, графической и аудиальной составляющих для формирования зрительского опыта в перформативном пространстве.
              </div>

              {/* Нижняя строка — три ссылки по колонкам */}
              <div className="grid grid-cols-3 items-start">
                {footerLinks
                  .filter(link => link.href) // Берем только записи с href
                  .slice(0, 3) // Берем первые три ссылки
                  .map((link, index) => {
                  if (!link) return null;

                  const alignment =
                    index === 0 ? "justify-self-start" :
                      index === 1 ? "justify-self-center" :
                        "justify-self-end";

                  const classes = `text-text-main text-sm md:text-lg lg:text-2xl underline hover:no-underline hover:text-accent transition ${alignment}`;

                  if (!link.href) {
                    return (
                      <span key={index} className={classes} aria-disabled>
                        {link.label}
                      </span>
                    );
                  }

                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
