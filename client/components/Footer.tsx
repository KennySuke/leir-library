export default function Footer() {
  import { footerLinks, footerRepeatCount } from "@/config/siteConfig";

  return (
    <footer className="w-full fixed bottom-0 left-0 z-50">
      <div className="relative overflow-hidden h-[100px] md:h-[120px] lg:h-[150px]">
        {/* Blur effect */}
        <div className="absolute inset-0 bg-black blur-[50px] backdrop-blur-sm" />

        {/* Scrolling contact links */}
        <div className="absolute bottom-0 left-0 right-0 bg-black shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
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
