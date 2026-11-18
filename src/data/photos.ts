import type { ImageMetadata } from 'astro';

export interface Photo {
  /** File name inside src/assets/photos/ */
  file: string;
  /** Describe what is in the photo, for screen readers. */
  alt: string;
  /** Optional caption, shown in the lightbox: "place · year" */
  caption?: string;
  /** Exactly three photos should be teasers (shown at the end of the home page). */
  teaser?: boolean;
  /** Optional crop focus for the 4:5 grid, CSS object-position syntax. */
  position?: string;
}

/** Order here is the order on /photos. Placeholders until real photos are exported. */
export const photos: Photo[] = [
  { file: 'placeholder-01.jpg', alt: 'Placeholder photo 1', caption: 'new york · 2026', teaser: true },
  { file: 'placeholder-02.jpg', alt: 'Placeholder photo 2', caption: 'brooklyn · 2025', teaser: true },
  { file: 'placeholder-03.jpg', alt: 'Placeholder photo 3', caption: 'queens · 2025', teaser: true },
  { file: 'placeholder-04.jpg', alt: 'Placeholder photo 4' },
  { file: 'placeholder-05.jpg', alt: 'Placeholder photo 5', caption: 'chinatown · 2024' },
  { file: 'placeholder-06.jpg', alt: 'Placeholder photo 6' },
  { file: 'placeholder-07.jpg', alt: 'Placeholder photo 7' },
  { file: 'placeholder-08.jpg', alt: 'Placeholder photo 8', caption: 'central park · 2024' },
  { file: 'placeholder-09.jpg', alt: 'Placeholder photo 9' },
  { file: 'placeholder-10.jpg', alt: 'Placeholder photo 10' },
  { file: 'placeholder-11.jpg', alt: 'Placeholder photo 11' },
  { file: 'placeholder-12.jpg', alt: 'Placeholder photo 12' },
];

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export interface ResolvedPhoto extends Photo {
  src: ImageMetadata;
}

export function resolvePhotos(list: Photo[] = photos): ResolvedPhoto[] {
  return list.map((p) => {
    const mod = files[`../assets/photos/${p.file}`];
    if (!mod) throw new Error(`photos.ts: src/assets/photos/${p.file} not found`);
    return { ...p, src: mod.default };
  });
}

export const teaserPhotos = () => resolvePhotos(photos.filter((p) => p.teaser).slice(0, 3));
