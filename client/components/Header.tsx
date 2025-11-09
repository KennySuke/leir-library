import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null); // 'projs', 'about' или null
  const [locked, setLocked] = useState(false);

  const open = (menu) => { if (!locked) setOpenMenu(menu); };
  const close = (menu) => { if (!locked && openMenu === menu) setOpenMenu(null); };
  const toggleLock = (menu, e) => {
    e.preventDefault();
    if (locked && openMenu === menu) {
      setLocked(false);
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
      setLocked(true);
    }
  };

  return (
    <header className="w-full bg-black relative">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[134px] py-6 lg:py-0 lg:h-[150px] flex items-center justify-center">
        <nav className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center relative">

          {/* LEFT NAVIGATION */}
          <div
            onMouseEnter={() => open("projs")}
            onMouseLeave={() => close("projs")}
            className={`flex items-center justify-center lg:justify-end gap-3 md:gap-4 lg:gap-[20px] pr-0 md:pr-4 lg:pr-[58px] text-sm md:text-base lg:text-2xl absolute lg:static left-0 top-full transition-all duration-300
              ${openMenu === "projs" ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}
          >
            <Link to="/live-sound" className="text-white hover:opacity-70 transition-opacity">live sound</Link>
            <Link to="/light-staging" className="text-white hover:opacity-70 transition-opacity">light staging</Link>
            <Link to="/events" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">events</Link>
            <Link to="/commercial" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">commercial</Link>
            <Link to="/art" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">art</Link>
          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-[21px] my-4 lg:my-0">
            {/* PROJS */}
            <Link
              to="/projects"
              onMouseEnter={() => open("projs")}
              onMouseLeave={() => close("projs")}
              onClick={(e) => toggleLock("projs", e)}
              className={`text-white text-2xl md:text-3xl lg:text-[40px] whitespace-nowrap transition-opacity ${openMenu === "projs" ? "opacity-100 font-bold" : "hover:opacity-70"}`}
            >
              PROJS
            </Link>

            {/* SVG LOGO */}
            <div className="relative w-[100px] h-[94px] md:w-[120px] md:h-[113px] lg:w-[148px] lg:h-[139px] flex items-center justify-center">
              {/* ...SVG код... */}
            </div>

            {/* ABOUT */}
            <Link
              to="/about"
              onMouseEnter={() => open("about")}
              onMouseLeave={() => close("about")}
              onClick={(e) => toggleLock("about", e)}
              className={`text-white text-2xl md:text-3xl lg:text-[40px] whitespace-nowrap transition-opacity ${openMenu === "about" ? "opacity-100 font-bold" : "hover:opacity-70"}`}
            >
              ABOUT
            </Link>
          </div>

          {/* RIGHT NAVIGATION */}
          <div
            onMouseEnter={() => open("about")}
            onMouseLeave={() => close("about")}
            className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 lg:gap-[111px] pl-0 md:pl-4 lg:pl-[58px] text-sm md:text-base lg:text-2xl absolute lg:static right-0 top-full transition-all duration-300
              ${openMenu === "about" ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-2"}`}
          >
            <Link to="/cv" className="text-white hover:opacity-70 transition-opacity">cv</Link>
            <Link to="/" className="text-white font-bold hover:opacity-70 transition-opacity">bio</Link>
            <Link to="/statement" className="text-white hover:opacity-70 transition-opacity">statement</Link>
          </div>

        </nav>
      </div>
    </header>
  );
}
