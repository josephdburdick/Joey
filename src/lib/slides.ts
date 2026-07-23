import { readdirSync } from 'node:fs';
import { join } from 'node:path';

export interface Slide {
  src: string;
  srcset?: string;
}

/**
 * Slide images live in public/projects/<name>/slides/ as slide-N.png with
 * optional slide-N@2x.png retina versions. The frontmatter lists are stale
 * for some projects, so the directory is the source of truth.
 */
export function getSlides(name: string, base: string): Slide[] {
  const dir = join(process.cwd(), 'public', 'projects', name, 'slides');
  let files: string[];
  try {
    files = readdirSync(dir);
  } catch {
    return [];
  }
  const prefix = `${base}projects/${name}/slides`;
  return files
    .filter((f) => /^slide-\d+\.(png|jpg)$/.test(f))
    .sort((a, b) => Number(a.match(/\d+/)![0]) - Number(b.match(/\d+/)![0]))
    .map((f) => {
      const retina = f.replace(/\.(png|jpg)$/, '@2x.$1');
      const src = `${prefix}/${f}`;
      return files.includes(retina)
        ? { src, srcset: `${src} 1x, ${prefix}/${retina} 2x` }
        : { src };
    });
}
