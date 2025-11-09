import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[134px] py-6 lg:py-0 lg:h-[150px] flex items-center justify-center">
        <nav className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-[58px] items-center">
          {/* Left Navigation */}
          <div className="flex items-center justify-center lg:justify-end gap-3 md:gap-4 lg:gap-[20px] text-sm md:text-base lg:text-2xl">
            <Link to="/live-sound" className="text-white hover:opacity-70 transition-opacity">
              live sound
            </Link>
            <Link to="/light-staging" className="text-white hover:opacity-70 transition-opacity">
              light staging
            </Link>
            <Link to="/events" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">
              events
            </Link>
            <Link to="/commercial" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">
              commercial
            </Link>
            <Link to="/art" className="text-white hover:opacity-70 transition-opacity whitespace-nowrap">
              art
            </Link>
          </div>

          {/* Center Logo */}
          <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-[21px] my-4 lg:my-0">
            <Link to="/projects" className="text-white text-2xl md:text-3xl lg:text-[40px] hover:opacity-70 transition-opacity whitespace-nowrap">
              PROJS
            </Link>
            <div className="relative w-[100px] h-[94px] md:w-[120px] md:h-[113px] lg:w-[148px] lg:h-[139px] flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 190 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="eclipse-blur" x="0" y="0" width="189.443" height="175.103" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="9.75" result="effect1_foregroundBlur"/>
                  </filter>
                </defs>
                <g filter="url(#eclipse-blur)">
                  <path d="M82.2695 19.7192L97.0875 65.3241H145.039L106.245 93.5095L121.063 139.114L82.2695 110.929L43.4757 139.114L58.2936 93.5095L19.4998 65.3241H67.4516L82.2695 19.7192Z" fill="#D9D9D9"/>
                  <path d="M138.115 19.5L128.325 66.4418L169.944 90.2584L122.274 95.4534L112.484 142.395L92.8128 98.6641L45.1432 103.859L80.6552 71.6368L60.9838 27.9057L102.603 51.7223L138.115 19.5Z" fill="#D9D9D9"/>
                  <path d="M153.88 59.3662L123.088 96.1252L148.533 136.769L104.057 118.844L73.2653 155.603L76.5702 107.765L32.095 89.839L78.6127 78.1994L81.9176 30.3616L107.362 71.0057L153.88 59.3662Z" fill="#D9D9D9"/>
                  <circle cx="92.7695" cy="85.2192" r="46.5" fill="#D9D9D9"/>
                </g>
                <circle cx="93.7695" cy="85.2192" r="37.5" fill="black"/>
              </svg>
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
