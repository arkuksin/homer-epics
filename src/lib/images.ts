import manifest from '../assets/images/manifest.json';

/** Alle optimierten WebP-Varianten (Vite hasht die Dateinamen im Build). */
const urls = import.meta.glob('../assets/images/opt/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

type ManifestEntry = { width: number; height: number; widths: number[] };
const entries = manifest as Record<string, ManifestEntry>;

export interface ResponsiveImage {
  src: string;
  srcSet: string;
  width: number;
  height: number;
}

function urlFor(name: string, width: number): string | undefined {
  return urls[`../assets/images/opt/${name}-${width}.webp`];
}

/** Liefert src/srcSet/Abmessungen für ein generiertes Bild. */
export function getImage(name: string): ResponsiveImage {
  const entry = entries[name];
  if (!entry) throw new Error(`Unbekanntes Bild: ${name}`);
  const widths = [...entry.widths].sort((a, b) => a - b);
  const srcSet = widths
    .map((w) => `${urlFor(name, w)} ${w}w`)
    .join(', ');
  const largest = widths[widths.length - 1];
  return {
    src: urlFor(name, largest)!,
    srcSet,
    width: entry.width,
    height: entry.height,
  };
}

export function hasImage(name: string): boolean {
  return name in entries;
}
