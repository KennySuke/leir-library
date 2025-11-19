import { useState, HTMLAttributes } from "react";

interface BlurUpImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string;
  thumb: string;
  alt: string;
  style?: React.CSSProperties; // стили для основной картинки
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

  // Определяем, нужно ли применять ч/б к миниатюре
  const thumbStyle: React.CSSProperties = {};
  if (style && ("filter" in style)) {
    thumbStyle.filter = style.filter;
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Маленькая версия — ч/б только если передан фильтр для основной картинки */}
      <img
        src={thumb}
        alt=""
        className="absolute inset-0 w-full h-full object-cover thumbnail"
        style={thumbStyle}
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
