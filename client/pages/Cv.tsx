import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Cv() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-1 mt-[150px] px-4 md:px-8 lg:px-[192px] py-8 md:py-12 lg:py-12">
        <div className="max-w-[1315px] text-[#F8F8F8] text-sm md:text-lg lg:text-2xl leading-normal space-y-6 md:space-y-8">

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Образование</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Технологическое искусство "ArtTECH", NUST MISIS, 2024-н.в.</li>
              <li>Информационные системы и технологии, NUST MISIS, 2020-2024</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Персональные проекты</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>2025 DIY светомузыкальные приборы на базе советских приборов, WOODZ Outline в сотрудничестве с Романом Крыловым</li>
              <li>2025-... Серия аудио-визуальных концертов под брендом f12, Москва</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Групповые выставки</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>2025 АртТех 25[I] / Краснохолмская</li>
              <li>2025 Студенческий май. Пространства утраченного / ГРАУНД Солянка</li>
              <li>2025 Эстетика ошибки. Глитч-арт / Краснохолмская</li>
              <li>2025 Экотревожность / Краснохолмская</li>
              <li>2025 Креативные решения экологических проблем / Экоцентр Сборка</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">AV-перформансы</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>2025 в рамках Signal 2025 with Digital Sisters / DEX (MAIN)</li>
              <li>2025 в рамках Пространства утраченного: 4.33 Гц / ГРАУНД Солянка</li>
              <li>2025 в рамках IN/OUT / Смена</li>
              <li>2025 в рамках f12 / Лахесис</li>
            </ul>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
