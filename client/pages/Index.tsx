import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <main>
        <div className="flex-1 relative">
          {/* Mobile Gradient Text Overlay */}
          <div className="lg:hidden relative z-20">
            <div
              className="overflow-auto h-screen pt-[60vh] px-4 text-text-main text-lg leading-relaxed"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
              }}
            >
              <p>
                Leir, междисциплинарная художница, родилась в 2001 году в Новомосковске, живёт и работает в Москве.
              </p>
              <p className="mt-6">
                Художественная практика включает DIY-электронику, звуковые эксперименты, интерактивные инсталляции и AV-перформансы. В своих работах художница изучает развитие систем власти, порождающих структуры подчинения в расширенном социальном поле.
              </p>
              <p className="mt-6">
                В настоящее время исследует возможности создания непрерывной системы из световой, графической и аудиальной составляющих для формирования зрительского опыта в перформативном пространстве.
              </p>
            </div>
          </div>
        </div>
        {/* Fixed Background Image for Mobile */}
        <div className="lg:hidden relative fixed bottom-0 left-0 justify-center items-center w-full z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f16ebf025ccd406f25a24d211cf6e69963cce7ee?width=876"
            alt="Leir portrait"
            className="absolute bottom-0 left-0 w-full h-full object-cover"
          />
        </div>

        <div className="hidden lg:flex-1 lg:flex items-center justify-center px-4 md:px-8 lg:px-[20px] py-12 md:py-16 lg:py-[200px]">
          <div className="w-full max-w-[1474px] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 lg:gap-[36px] items-center">
            {/* Left Text */}
            <div className="text-text-main text-sm md:text-lg lg:text-2xl text-center lg:text-right leading-normal order-1 lg:order-1 self-start">
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
            <div className="text-text-main text-sm md:text-lg lg:text-2xl text-center lg:text-left leading-normal self-end order-3 lg:order-3">
              В настоящее время исследует возможности создания непрерывной системы из световой, графической и аудиальной составляющих для формирования зрительского опыта в перформативном пространстве.
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}
