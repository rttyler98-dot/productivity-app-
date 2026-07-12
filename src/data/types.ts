export interface Slide {
  id: string;
  type: 'title' | 'text' | 'quote' | 'exercise';
  title?: string;
  content: string;
  image?: string;
  icon?: string;
  bgColor?: string;
  textColor?: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  slides: Slide[];
}
