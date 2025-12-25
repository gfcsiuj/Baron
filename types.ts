export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ImageAsset {
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'room' | 'lobby';
}

export interface Review {
  author: string;
  rating: number;
  content: string;
  source: string;
  date: string;
}