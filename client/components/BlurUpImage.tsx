import { useState, HTMLAttributes } from "react";

interface BlurUpImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  thumb: string;
  alt: string;
  style?: React.CSSProperties; // для полной картинки
}

export default function BlurUpImage({
  src,
  thumb,
  alt,
  className = "",
  style,
  onMouseEnter,
  onMouseLeave,
}: BlurUpImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Маленькая версия — всегда ч/б */}
      <img
        src={thumb}
        alt=""
        className="absolute inset-0 w-full h-full object-cover thumbnail"
        style={{ filter: 'grayscale(1) brightness(0.7)' }} // ч/б миниатюра
      />

      {/* Основная */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover full-image ${loaded ? "loaded" : ""
          }`}
        onLoad={() => setLoaded(true)}
        style={style}
      />
    </div>
  );
}
