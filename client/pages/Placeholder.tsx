import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="text-center">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl mb-6">{title}</h1>
          <p className="text-[#F8F8F8] text-lg md:text-xl lg:text-2xl">
            This page is coming soon. Continue prompting to fill in this content.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
