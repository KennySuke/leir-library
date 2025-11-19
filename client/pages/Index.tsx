import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { footerLinks, footerRepeatCount } from "@/config/siteConfig";

export default function Index() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyBio = async () => {
    const leftText =
      "Leir, междисциплинарная художница, родилась в 2001 году в Новомосковске, живёт и работает в Москве.\n\nХудожественная практика включает DIY-электронику, звуковые эксперименты, интерактивные инсталляции и AV-перформансы. В своих работах художница изучает развитие систем власти, порождающих структуры подчинения в расширенном социальном поле.";

    const rightText =
      "В настоящее время исследует возможности создания непрерывной системы из световой, графической и аудиальной составляющих для формирования зрительского опыта в перформативном пространстве.";

    const linksText = footerLinks
      .filter((link) => link.href)
      .slice(0, 3)
      .map((link) => `${link.label}: ${link.href}`)
      .join("\n");

    const fullText = `${leftText}\n\n${rightText}\n\n${linksText}`;

    try {
      await navigator.clipboard.writeText(fullText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
              Leir, междисциплинарная художница, родилась в 2001 году в
              Новомосковске, живёт и работает в Москве.
            </p>
            <p>
              Художественная практика включает DIY-электронику, звуковые
              эксперименты, интерактивные инсталляции и AV-перформансы. В своих
              работах художница изучает развитие систем власти, порождающих
              структуры подчинения в расширенном социальном поле.
            </p>
            <p>
              В настоящее время исследует возможности создания непрерывной
              системы из световой, графической и аудиальной составляющих для
              формирования зрительского опыта в перформативном пространстве.
            </p>
          </div>
          <div className=" -top-40 left-0 w-full h-40 bg-black/70 z-20" />
        </div>

        {/* Fixed Background Image for Mobile */}
        <div className="lg:hidden fixed top-[20%] left-0 w-full z-10">
          <img
            src="/leir_main.png"
            alt="Leir portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="hidden lg:flex-1 lg:flex lg:flex-col items-center justify-center px-4 md:px-8 lg:px-[225px] py-12 md:py-16 lg:py-[200px] gap-6">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr] gap-6 md:gap-8 lg:gap-[36px] items-center justify-start mx-auto">
            {/* Left Text */}
            <div className="text-text-main text-center leading-normal order-1 lg:order-1 self-start text-justify">
              <div style={{ fontSize: '20px' }}>
                Leir, междисциплинарная художница, родилась в 2001 году в
                Новомосковске, живёт и работает в Москве.
              </div>
              <br />
              <br />
              <div style={{ fontSize: '20px' }}>
                Художественная практика включает DIY-электронику, звуковые
                эксперименты, интерактивные инсталляции и AV-перформансы. В своих
                работах художница изучает развитие систем власти, порождающих
                структуры подчинения в расширенном социальном поле.
              </div>
            </div>

            {/* Center Image */}
            <div className="flex justify-center order-2 lg:order-2">
              <img
                src="/leir_main.png"
                alt="Leir portrait"
                className="w-[80%] md:w-[90%] lg:w-[100%] aspect-[3/4] object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="grid grid-rows-[auto_auto] gap-4 order-3 self-end">
              {/* Верхняя строка */}
              <div className="text-text-main text-center leading-normal self-end text-justify" style={{ fontSize: '20px' }}>
                В настоящее время исследует возможности создания непрерывной
                системы из световой, графической и аудиальной составляющих для
                формирования зрительского опыта в перформативном пространстве.
              </div>

              {/* Нижняя строка — flex с равномерным распределением ссылок */}
              <div className="flex justify-between items-start">
                {footerLinks
                  .filter((link) => link.href) // Берем только записи с href
                  .slice(0, 3) // Берем первые три ссылки
                  .map((link, index) => {
                    const classes = `text-text-main underline hover:no-underline hover:text-accent transition`;
                    const linkStyle = { fontSize: '20px' };

                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes}
                        style={linkStyle}
                      >
                        {link.label}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
          <button
            onClick={handleCopyBio}
            className="ml-auto flex items-center justify-center w-[230px] h-[56px] rounded-[6px] border-[3px] cursor-pointer transition-all duration-200"
            style={{
              borderColor: isCopied
                ? "rgba(134, 134, 134, 0.41)"
                : "rgba(134, 134, 134, 0.41)",
              color: isCopied ? "#000" : "#BFBFBF",
              fontFamily:
                "NotCourierSans, -apple-system, Roboto, Helvetica, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "normal",
              background: isCopied ? "#E8E8E8" : "transparent",
              boxShadow: !isCopied ? "0 0 0 0 transparent" : "none",
            }}
            onMouseEnter={(e) => {
              if (!isCopied) {
                e.currentTarget.style.background = "rgba(200, 200, 200, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isCopied) {
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            {isCopied ? "скопировано" : "копировать био"}
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
