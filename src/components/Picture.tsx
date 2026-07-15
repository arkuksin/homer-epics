import { getImage } from '../lib/images';

interface PictureProps {
  name: string;
  alt: string;
  sizes?: string;
  eager?: boolean;
  className?: string;
}

/** Responsives WebP-Bild mit festen Abmessungen (kein Layout-Shift). */
export function Picture({ name, alt, sizes = '100vw', eager = false, className }: PictureProps) {
  const img = getImage(name);
  return (
    <img
      src={img.src}
      srcSet={img.srcSet}
      sizes={sizes}
      width={img.width}
      height={img.height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding={eager ? 'sync' : 'async'}
      fetchPriority={eager ? 'high' : undefined}
      className={className}
    />
  );
}
