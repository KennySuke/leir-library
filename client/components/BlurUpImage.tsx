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

  // Применяем фильтр к миниатюре только если передан фильтр основной картинки
  const thumbStyle: React.CSSProperties = {};
  if (style && "filter" in style) {
    thumbStyle.filter = style.filter;
  }

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Маленькая версия — скрываем после загрузки основной */}
      <img
        src={thumb}
        alt=""
        className="absolute inset-0 w-full h-full object-cover thumbnail transition-opacity duration-500"
        style={{
          ...thumbStyle,
          opacity: loaded ? 0 : 1, // миниатюра исчезает после загрузки
        }}
      />

      {/* Основная */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover full-image ${loaded ? "loaded" : ""}`}
        onLoad={() => setLoaded(true)}
        style={style}
      />
    </div>
  );
}
