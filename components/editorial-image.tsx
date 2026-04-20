import Image, { type ImageProps } from "next/image";

type EditorialImageProps = ImageProps;

export function EditorialImage({ src, alt, fill, className, style, ...props }: EditorialImageProps) {
  const isSvg = typeof src === "string" && src.endsWith(".svg");
  const isRemoteUrl = typeof src === "string" && /^https?:\/\//.test(src);

  if (isSvg || isRemoteUrl) {
    return (
      <img
        src={src}
        alt={alt}
        className={fill ? `absolute inset-0 h-full w-full ${className ?? ""}` : className}
        style={style}
        loading={props.priority ? "eager" : "lazy"}
      />
    );
  }

  return <Image src={src} alt={alt} fill={fill} className={className} style={style} {...props} />;
}
