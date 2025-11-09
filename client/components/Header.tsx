import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null); // 'left' | 'right' | null
  const [pinnedMenu, setPinnedMenu] = useState(null); // фиксация кликом

  const handleMouseEnter = (menu) => {
    if (!pinnedMenu) setActiveMenu(menu);
  };

  const handleMouseLeave = (menu) => {
    if (!pinnedMenu) setActiveMenu(null);
  };

  const handleClick = (menu) => {
    if (pinnedMenu === menu) {
      // снимаем фиксацию
      setPinnedMenu(null);
      setActiveMenu(null);
    } else {
      // фиксируем меню
      setPinnedMenu(menu);
      setActiveMenu(menu);
    }
  };

  return (
    <header className="w-full bg-black relative">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[134px] py-6 lg:py-0 lg:h-[150px] flex items-center justify-center">
        <nav className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-[58px] items-center">

          {/* LEFT NAVIGATION */}
          <div className="flex items-center justify-center lg:justify-end gap-3 md:gap-4 lg:gap-[20px] text-sm md:text-base lg:text-2xl">
            <Link to="/live-sound" className="text-white hover:opacity-70 transition-opacity">live sound</Link>
            <Link to="/light-staging" className="text-white hover:opacity-70 transition-opacity">light staging</Link>
            <Link to="/events" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">events</Link>
            <Link to="/commercial" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">commercial</Link>
            <Link to="/art" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">art</Link>
          </div>

          {/* CENTER LOGO + TRIGGERS */}
          <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-[21px] my-4 lg:my-0 relative">
            {/* PROJS */}
            <button
              onMouseEnter={() => handleMouseEnter("left")}
              onMouseLeave={() => handleMouseLeave("left")}
              onClick={() => handleClick("left")}
              className={`text-white text-2xl md:text-3xl lg:text-[40px] transition-opacity whitespace-nowrap ${activeMenu === "left" ? "opacity-70" : ""
                }`}
            >
              PROJS
            </button>

            {/* LOGO */}
            <div className="relative w-[100px] h-[94px] md:w-[120px] md:h-[113px] lg:w-[148px] lg:h-[139px] flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 190 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="eclipse-blur" x="0" y="0" width="189.443" height="175.103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="9.75" result="effect1_foregroundBlur" />
                  </filter>
                </defs>
                <g filter="url(#eclipse-blur)">
                  <path d="M82.2695 19.7192L97.0875 65.3241H145.039L106.245 93.5095L121.063 139.114L82.2695 110.929L43.4757 139.114L58.2936 93.5095L19.4998 65.3241H67.4516L82.2695 19.7192Z" fill="#D9D9D9" />
                  <circle cx="93.7695" cy="85.2192" r="37.5" fill="black" />
                </g>
              </svg>
            </div>

            {/* ABOUT */}
            <button
              onMouseEnter={() => handleMouseEnter("right")}
              onMouseLeave={() => handleMouseLeave("right")}
              onClick={() => handleClick("right")}
              className={`text-white text-2xl md:text-3xl lg:text-[40px] transition-opacity whitespace-nowrap ${activeMenu === "right" ? "opacity-70" : ""
                }`}
            >
              ABOUT
            </button>
          </div>

          {/* RIGHT NAVIGATION */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 lg:gap-[111px] text-sm md:text-base lg:text-2xl">
            <Link to="/cv" className="text-white hover:opacity-70 transition-opacity">cv</Link>
            <Link to="/" className="text-white font-bold hover:opacity-70 transition-opacity">bio</Link>
            <Link to="/statement" className="text-white hover:opacity-70 transition-opacity">statement</Link>
          </div>
        </nav>
      </div>

      {/* LEFT DROPDOWN */}
      {(activeMenu === "left") && (
        <div
          className="absolute left-0 top-full w-1/2 bg-black border-t border-gray-700 text-white py-6 px-12 z-50"
          onMouseEnter={() => handleMouseEnter("left")}
          onMouseLeave={() => handleMouseLeave("left")}
        >
          <p className="text-lg mb-3">Left navigation content</p>
          <p className="text-sm text-gray-400">Hover или click на PROJS</p>
        </div>
      )}

      {/* RIGHT DROPDOWN */}
      {(activeMenu === "right") && (
        <div
          className="absolute right-0 top-full w-1/2 bg-black border-t border-gray-700 text-white py-6 px-12 z-50"
          onMouseEnter={() => handleMouseEnter("right")}
          onMouseLeave={() => handleMouseLeave("right")}
        >
          <p className="text-lg mb-3">Right navigation content</p>
          <p className="text-sm text-gray-400">Hover или click на ABOUT</p>
        </div>
      )}
    </header>
  );
}
