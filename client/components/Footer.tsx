export default function Footer() {
  const contacts = [
    { name: "leir", bold: true },
    { name: "telegram", bold: false },
    { name: "tg channel", bold: false },
    { name: "mail", bold: false },
  ];

  return (
    <footer className="w-full bg-black mt-auto">
      <div className="relative overflow-hidden h-[100px] md:h-[120px] lg:h-[150px]">
        {/* Blur effect */}
        <div className="absolute inset-0 bg-black blur-[50px] backdrop-blur-sm" />
        
        {/* Scrolling contact links */}
        <div className="absolute bottom-0 left-0 right-0 bg-black shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
          <div className="overflow-hidden py-3 md:py-4">
            <div className="flex justify-start animate-scroll whitespace-nowrap lg:gap-[35px]">
              {/* Repeat contacts multiple times for continuous scroll */}
              {[...Array(8)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center gap-6 md:gap-8 lg:gap-[35px]">
                  {contacts.map((contact, index) => (
                    <a
                      key={`${groupIndex}-${index}`}
                      href="#"
                      className={`text-white text-sm md:text-lg lg:text-2xl hover:opacity-70 transition-opacity ${
                        contact.bold ? "font-bold" : "font-normal"
                      }`}
                    >
                      {contact.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
