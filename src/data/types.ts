export type BgAnimation = 'breathe' | 'pulse' | 'float' | 'waves' | 'none';

export interface Slide {
  id: string;
  type: 'title' | 'text' | 'quote' | 'exercise';
  title?: string;
  content: string;
  image?: string;
  icon?: string;
  bgColor?: string;
  textColor?: string;
  bgAnimation?: BgAnimation;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  slides: Slide[];
}
