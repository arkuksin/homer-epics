/**
 * Optimiert die mit Codex CLI generierten Rohbilder (src/assets/images/raw/*.png)
 * zu responsiven WebP-Dateien in src/assets/images/opt/.
 * Zusätzlich wird das Social-Preview-Bild public/og-image.jpg erzeugt.
 */
import { readdir, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'src/assets/images/raw');
const OUT = path.join(ROOT, 'src/assets/images/opt');
const PUBLIC = path.join(ROOT, 'public');

const WIDTHS = [480, 960, 1600];

await mkdir(OUT, { recursive: true });
await mkdir(PUBLIC, { recursive: true });

const files = (await readdir(RAW)).filter((f) => f.endsWith('.png'));
if (files.length === 0) {
  console.error('Keine Rohbilder gefunden. Zuerst scripts/generate-images.sh ausführen.');
  process.exit(1);
}

const manifest = {};

for (const file of files) {
  const name = path.basename(file, '.png');
  const src = sharp(path.join(RAW, file));
  const meta = await src.metadata();
  const widths = [];
  for (const width of WIDTHS) {
    if (width > meta.width) continue;
    widths.push(width);
    const out = path.join(OUT, `${name}-${width}.webp`);
    await src
      .clone()
      .resize({ width })
      .webp({ quality: 80 })
      .toFile(out);
  }
  // Größte Stufe immer erzeugen (Originalbreite, falls kleiner als 1600)
  if (meta.width < 1600) {
    widths.push(meta.width);
    await src
      .clone()
      .webp({ quality: 80 })
      .toFile(path.join(OUT, `${name}-${meta.width}.webp`));
  }
  manifest[name] = { width: meta.width, height: meta.height, widths };
  console.log(`✓ ${name} (${meta.width}×${meta.height})`);
}

await writeFile(
  path.join(ROOT, 'src/assets/images/manifest.json'),
  JSON.stringify(manifest, null, 2),
);
console.log('✓ manifest.json');

// Social-Preview (Open Graph): 1200×630 aus dem Startseiten-Hero
await sharp(path.join(RAW, 'hero-home.png'))
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 82 })
  .toFile(path.join(PUBLIC, 'og-image.jpg'));
console.log('✓ og-image.jpg (1200×630)');
