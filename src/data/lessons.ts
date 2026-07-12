import type { Lesson } from './types';

export const lessonsData: Lesson[] = [
  {
    id: "power-of-small-wins",
    title: "Small Wins",
    description: "Start small when feeling overwhelmed.",
    coverImage: "bg-blue-100",
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "leaf",
        title: "The Mountain",
        content: "Right now, everything feels too big.",
        bgColor: "#1e3a8a", // Dark blue, heavy
        textColor: "#ffffff",
        bgAnimation: "pulse", // Heavy slow pulse
      },
      {
        id: "slide2",
        type: "text",
        content: "Stop looking at the peak.",
        bgColor: "#1d4ed8",
        textColor: "#ffffff",
        bgAnimation: "none",
      },
      {
        id: "slide3",
        type: "text",
        title: "Micro-steps",
        content: "Just look at the next inch.",
        bgColor: "#2563eb",
        textColor: "#ffffff",
        bgAnimation: "float", // Rising, lighter feel
      },
      {
        id: "slide4",
        type: "exercise",
        title: "One Thing.",
        content: "What is a 1-minute task you can do right now?",
        bgColor: "#3b82f6",
        textColor: "#ffffff",
        bgAnimation: "breathe", // Calming, opening up
      }
    ]
  },
  {
    id: "reframing-thoughts",
    title: "Inner Critic",
    description: "Be kind to your mind.",
    coverImage: "bg-indigo-100",
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "cloud",
        title: "The Voice",
        content: "It can be so loud in there.",
        bgColor: "#312e81", // Deep indigo
        textColor: "#ffffff",
        bgAnimation: "waves", // Chaotic/moving waves
      },
      {
        id: "slide2",
        type: "text",
        content: "\"I'm worthless.\" \"I always fail.\"",
        bgColor: "#3730a3",
        textColor: "#c7d2fe", // Muted text
        bgAnimation: "none",
      },
      {
        id: "slide3",
        type: "quote",
        content: "Would you say that to a friend?",
        bgColor: "#4f46e5",
        textColor: "#ffffff",
        bgAnimation: "float",
      },
      {
        id: "slide4",
        type: "exercise",
        title: "Breathe in Grace",
        content: "Forgive yourself for one mistake today.",
        bgColor: "#6366f1",
        textColor: "#ffffff",
        bgAnimation: "breathe",
      }
    ]
  },
  {
    id: "finding-joy",
    title: "Noticing Joy",
    description: "Train your brain to see the good.",
    coverImage: "bg-amber-100",
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "moon",
        title: "The Filter",
        content: "Our brains are wired to see the bad.",
        bgColor: "#171717", // Almost black
        textColor: "#ffffff",
        bgAnimation: "pulse",
      },
      {
        id: "slide2",
        type: "text",
        content: "We must train them to see the light.",
        bgColor: "#92400e", // Warm but dark
        textColor: "#ffffff",
        bgAnimation: "waves",
      },
      {
        id: "slide3",
        type: "text",
        content: "A warm cup.\nSunlight.\nA deep breath.",
        bgColor: "#d97706",
        textColor: "#ffffff",
        bgAnimation: "float",
      },
      {
        id: "slide4",
        type: "exercise",
        title: "Look around.",
        content: "Find one small thing you love. Hold it in your mind.",
        bgColor: "#f59e0b", // Bright warm amber
        textColor: "#ffffff",
        bgAnimation: "breathe",
      }
    ]
  }
];
