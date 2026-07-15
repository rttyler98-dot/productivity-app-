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

export type LessonSize = 'small' | 'medium' | 'large';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  tags: string[]; // Goals this lesson addresses (e.g. 'peace', 'presence', 'joy', 'compassion')
  slides: Slide[];
  size?: LessonSize; // Determines how it is displayed on the home page
  unit?: string;     // Grouping for multi-day/structured courses (e.g., 'Anxiety Basics')
  day?: number;      // If part of a unit, which day it is
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: string[]; // Lesson IDs in order
}
