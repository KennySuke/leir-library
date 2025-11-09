import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 md:px-8 lg:px-[223px] py-12 md:py-16 lg:py-[98px]">
        <div className="w-full max-w-[1474px] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 lg:gap-[36px] items-center">
          {/* Left Text */}
          <div className="text-[#F8F8F8] text-sm md:text-lg lg:text-2xl text-center lg:text-right leading-normal order-1 lg:order-1 self-start">
            Leir, междисциплинарная художница, родилась в 2001 году в Новомосковске, живёт и работает в Москве.
            <br /><br />
            Художественная практика включает DIY-электронику, звуковые эксперименты, интерактивные инсталляции и AV-перформансы. В своих работах художница изучает развитие систем власти, порождающих структуры подчинения в расширенном социальном поле.
          </div>

          {/* Center Image */}
          <div className="flex justify-center order-2 lg:order-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/f16ebf025ccd406f25a24d211cf6e69963cce7ee?width=876"
              alt="Leir portrait"
              className="w-full max-w-[300px] md:max-w-[350px] lg:w-[550px] aspect-[3/4] object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="text-[#F8F8F8] text-sm md:text-lg lg:text-2xl text-center lg:text-left leading-normal self-end order-3 lg:order-3">
            В настоящее время исследует возможности создания непрерывной системы из световой, графической и аудиальной составляющих для формирования зрительского опыта в перформативном пространстве.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
