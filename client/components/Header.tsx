import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [lockedLeft, setLockedLeft] = useState(false);
  const [lockedRight, setLockedRight] = useState(false);

  const location = useLocation();

  const handleHover = (side, value) => {
    if (side === "left" && !lockedLeft) setLeftOpen(value);
    if (side === "right" && !lockedRight) setRightOpen(value);
  };

  const handleClick = (side, e) => {
    e.preventDefault();
    if (side === "left") {
      if (lockedLeft) { setLockedLeft(false); setLeftOpen(false); }
      else { setLockedLeft(true); setLeftOpen(true); }
    } else {
      if (lockedRight) { setLockedRight(false); setRightOpen(false); }
      else { setLockedRight(true); setRightOpen(true); }
    }
  };

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `text-white hover:opacity-70 transition-opacity ${isActive ? "font-bold" : "font-normal"}`;
  };


  return (
    <header className="w-full bg-black/80 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-center max-w-[1920px] mx-auto px-2 py-0 md:px-2 lg:px-4 h-[150px]" style={{ boxShadow: "1px 1px 70px 35px rgba(0, 0, 0, 1)" }}>
        <nav className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] justify-center items-center relative">

          {/* LEFT NAVIGATION */}
          <div
            onMouseEnter={() => handleHover("left", true)}
            onMouseLeave={() => handleHover("left", false)}
            className={`flex flex-col lg:flex-row items-start lg:items-center justify-end gap-3 md:gap-2 lg:gap-[20px] pr-0 md:pr-4 lg:pr-[58px] text-sm md:text-base lg:text-2xl absolute lg:static left-0 top-5 lg:top-full
            transition-all duration-300 transform
            ${leftOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-1/2 pointer-events-none"}`}
          >
            <Link to="/live-sound" className={getLinkClass("/live-sound")}>live<br />sound</Link>
            <Link to="/light-staging" className={getLinkClass("/light-staging")}>light<br />staging</Link>
            <Link to="/events" className={getLinkClass("/events")}>events</Link>
            <Link to="/commercial" className={getLinkClass("/commercial")}>commercial</Link>
            <Link to="/art" className={getLinkClass("/art")}>art</Link>
          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-[21px] my-4 lg:my-0">
            {/* PROJS */}
            <Link
              to="/projects"
              onMouseEnter={() => handleHover("left", true)}
              onMouseLeave={() => handleHover("left", false)}
              onClick={(e) => handleClick("left", e)}
              className="text-white text-2xl md:text-3xl lg:text-[40px] whitespace-nowrap hover:opacity-70 transition-opacity"
            >
              PROJS
            </Link>

            {/* SVG LOGO с глобальными анимациями */}
            <div className="relative w-[130px] h-[122px] md:w-[156px] md:h-[147px] lg:w-[192px] lg:h-[180px] flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 190 176"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="eclipse-blur" x="0" y="0" width="189.443" height="175.103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="9.75" result="effect1_foregroundBlur" />
                  </filter>
                </defs>
                <g className="group">
                  <g filter="url(#eclipse-blur)">
                    <path
                      className="rotate-center animate-spin-variable spin-fast"
                      d="M82.2695 19.7192L97.0875 65.3241H145.039L106.245 93.5095L121.063 139.114L82.2695 110.929L43.4757 139.114L58.2936 93.5095L19.4998 65.3241H67.4516L82.2695 19.7192Z"
                      fill="#D9D9D9"
                    />
                    <path
                      className="rotate-center animate-spin-reverse spin-medium"
                      d="M138.115 19.5L128.325 66.4418L169.944 90.2584L122.274 95.4534L112.484 142.395L92.8128 98.6641L45.1432 103.859L80.6552 71.6368L60.9838 27.9057L102.603 51.7223L138.115 19.5Z"
                      fill="#D9D9D9"
                    />
                    <path
                      className="rotate-center animate-spin-variable spin-fastest"
                      d="M153.88 59.3662L123.088 96.1252L148.533 136.769L104.057 118.844L73.2653 155.603L76.5702 107.765L32.095 89.839L78.6127 78.1994L81.9176 30.3616L107.362 71.0057L153.88 59.3662Z"
                      fill="#D9D9D9"
                    />
                    <circle
                      className="rotate-center animate-spin-variable spin-slow"
                      cx="92.7695"
                      cy="85.2192"
                      r="46.5"
                      fill="#D9D9D9"
                    />
                  </g>
                  <circle cx="93.7695" cy="85.2192" r="37.5" fill="black" />
                </g>
                
              </svg>
            </div>

            {/* ABOUT */}
            <Link
              to="/about"
              onMouseEnter={() => handleHover("right", true)}
              onMouseLeave={() => handleHover("right", false)}
              onClick={(e) => handleClick("right", e)}
              className="text-white text-2xl md:text-3xl lg:text-[40px] whitespace-nowrap hover:opacity-70 transition-opacity"
            >
              ABOUT
            </Link>
          </div>

          {/* RIGHT NAVIGATION */}
          <div
            onMouseEnter={() => handleHover("right", true)}
            onMouseLeave={() => handleHover("right", false)}
            className={`flex flex-col lg:flex-row items-end lg:items-center justify-start gap-2 md:gap-8 lg:gap-[111px] pl-0 md:pl-4 lg:pl-[58px] text-sm md:text-base lg:text-2xl absolute lg:static right-0 top-12 lg:top-full
            transition-all duration-300 transform
            ${rightOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-1/2 pointer-events-none"}`}
          >
            <Link to="/cv" className={getLinkClass("/cv")}>cv</Link>
            <Link to="/" className={getLinkClass("/")}>bio</Link>
            <Link to="/statement" className={getLinkClass("/statement")}>statement</Link>
          </div>

        </nav>
      </div>
    </header>
  );
}
