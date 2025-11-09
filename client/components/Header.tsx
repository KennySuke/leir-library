import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[134px] py-6 lg:py-0 lg:h-[150px] flex items-center justify-center">
        <nav className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-[58px] items-center">
          {/* Left Navigation */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 md:gap-4 lg:gap-[26px] text-sm md:text-base lg:text-2xl">
            <Link to="/live-sound" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">
              live sound
            </Link>
            <Link to="/light-staging" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">
              light staging
            </Link>
            <Link to="/events" className="text-white hover:opacity-70 transition-opacity">
              events
            </Link>
            <Link to="/commercial" className="text-white hover:opacity-70 transition-opacity">
              commercial
            </Link>
            <Link to="/art" className="text-white hover:opacity-70 transition-opacity">
              art
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-[21px] my-4 lg:my-0">
            <Link to="/projects" className="text-white text-2xl md:text-3xl lg:text-[40px] hover:opacity-70 transition-opacity whitespace-nowrap">
              PROJS
            </Link>
            <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[148px] lg:h-[139px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-[#D9D9D9] blur-[9.75px]" />
              </div>
              <div className="relative w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[75px] lg:h-[75px] rounded-full bg-black" />
            </div>
            <Link to="/about" className="text-white text-2xl md:text-3xl lg:text-[40px] hover:opacity-70 transition-opacity whitespace-nowrap">
              ABOUT
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 lg:gap-[111px] text-sm md:text-base lg:text-2xl">
            <Link to="/cv" className="text-white hover:opacity-70 transition-opacity">
              cv
            </Link>
            <Link to="/" className="text-white font-bold hover:opacity-70 transition-opacity">
              bio
            </Link>
            <Link to="/statement" className="text-white hover:opacity-70 transition-opacity">
              statement
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
