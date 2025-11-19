import { useState } from "react";

export default function BlurUpImage({ src, thumb, alt, className = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Маленькая версия */}
      <img
        src={thumb}
        alt=""
        className="absolute inset-0 w-full h-full object-cover thumbnail"
      />

      {/* Основная */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover full-image ${
          loaded ? "loaded" : ""
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
