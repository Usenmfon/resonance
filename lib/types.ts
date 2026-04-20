export type DiscographyItem = {
  title: string;
  type: "Album" | "EP" | "Single";
  year: string;
  cover: string;
  description: string;
};

export type AwardItem = {
  title: string;
  year: string;
  organization: string;
  result: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type StatItem = {
  label: string;
  value: string;
  detail: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type NotableMoment = {
  title: string;
  category: string;
  year: string;
  description: string;
};

export type Celebrity = {
  id: string;
  name: string;
  stageName: string;
  slug: string;
  heroImage: string;
  coverImage: string;
  shortBio: string;
  fullBiography: string[];
  birthInfo: string;
  nationality: string;
  genres: string[];
  yearsActive: string;
  labels: string[];
  instruments: string[];
  achievements: string[];
  discography: DiscographyItem[];
  awards: AwardItem[];
  stats: StatItem[];
  gallery: GalleryItem[];
  socialLinks: SocialLink[];
  notableMoments: NotableMoment[];
  influence: string[];
  earlyLife: string[];
  timeline: TimelineItem[];
};
