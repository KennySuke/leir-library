import { footerLinks, footerRepeatCount } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="w-full fixed bottom-0 left-0 z-50">
      <div className="relative overflow-hidden h-[100px] md:h-[120px] lg:h-[150px]">
        {/* Blur effect background */}
        <div className="absolute left-0 right-0 h-[122px] bg-black/80 blur-[100px] backdrop-blur-[1px]" style={{ top: '21px' }} />

        {/* Scrolling contact links with backdrop blur */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <div className="overflow-hidden py-3 md:py-4">
            <div className="flex justify-start animate-scroll whitespace-nowrap lg:gap-[37px]">
              {/* Repeat contacts multiple times for continuous scroll */}
              {[...Array(footerRepeatCount)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center gap-6 md:gap-8 lg:gap-[37px]">
                  {footerLinks.map((link, index) => {
                    const key = `${groupIndex}-${index}`;
                    const classes = `text-white text-sm md:text-lg lg:text-2xl ${link.bold ? "font-bold" : "font-normal hover:opacity-70 transition-opacity"}`;
                    if (!link.href) {
                      return (
                        <span key={key} className={classes} aria-disabled>
                          {link.label}
                        </span>
                      );
                    }
                    return (
                      <a key={key} href={link.href} className={classes} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
