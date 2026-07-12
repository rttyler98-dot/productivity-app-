import type { Lesson } from './types';

export const lessonsData: Lesson[] = [
  {
    id: "power-of-small-wins",
    title: "The Power of Small Wins",
    description: "When everything feels overwhelming, start small.",
    coverImage: "bg-blue-100", // Using a background color class instead of a real image for simplicity in the prototype
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "🌱",
        title: "The Power of Small Wins",
        content: "When you're depressed, even getting out of bed is a victory.",
        bgColor: "#eff6ff", // blue-50
        textColor: "#1e3a8a", // blue-900
      },
      {
        id: "slide2",
        type: "text",
        title: "The Mount Everest Illusion",
        content: "We often look at our goals as a massive mountain. When we're down, looking at the peak is paralyzing.",
        bgColor: "#1e3a8a",
        textColor: "#ffffff",
      },
      {
        id: "slide3",
        type: "quote",
        content: "Great things are done by a series of small things brought together.",
        bgColor: "#dbeafe", // blue-100
        textColor: "#1e3a8a",
      },
      {
        id: "slide4",
        type: "text",
        title: "Micro-steps",
        content: "Instead of 'clean the house', make the goal 'put away one shirt'. That's it. If you do more, great. If not, you still succeeded.",
        bgColor: "#1d4ed8", // blue-700
        textColor: "#ffffff",
      },
      {
        id: "slide5",
        type: "exercise",
        title: "Your Micro-win",
        content: "Take a deep breath. What is one tiny, 1-minute task you can do right now to be kind to yourself?",
        bgColor: "#bfdbfe", // blue-200
        textColor: "#1e40af", // blue-800
      }
    ]
  },
  {
    id: "reframing-thoughts",
    title: "Reframing the Inner Critic",
    description: "Learn to be as kind to yourself as you are to a friend.",
    coverImage: "bg-indigo-100",
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "🗣️",
        title: "The Inner Critic",
        content: "We all have a voice inside our head. Sometimes, it's really mean.",
        bgColor: "#eef2ff", // indigo-50
        textColor: "#312e81", // indigo-900
      },
      {
        id: "slide2",
        type: "text",
        content: "When you're feeling down, this voice tends to use words like 'always', 'never', and 'worthless'. This is called a cognitive distortion.",
        bgColor: "#3730a3", // indigo-800
        textColor: "#ffffff",
      },
      {
        id: "slide3",
        type: "quote",
        content: "You wouldn't let someone else talk to you the way you talk to yourself.",
        bgColor: "#c7d2fe", // indigo-200
        textColor: "#312e81",
      },
      {
        id: "slide4",
        type: "text",
        title: "The Best Friend Test",
        content: "Next time you catch yourself thinking 'I'm a failure', ask yourself: 'Would I say this to my best friend if they were in my shoes?'",
        bgColor: "#4f46e5", // indigo-600
        textColor: "#ffffff",
      },
      {
        id: "slide5",
        type: "exercise",
        title: "Practice Kindness",
        content: "Think of one mistake you made recently. Now, forgive yourself for it, just like a good friend would.",
        bgColor: "#e0e7ff", // indigo-100
        textColor: "#3730a3", // indigo-800
      }
    ]
  },
  {
    id: "finding-joy",
    title: "Noticing the Good",
    description: "Training your brain to spot tiny moments of joy.",
    coverImage: "bg-amber-100",
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "☀️",
        title: "Noticing the Good",
        content: "Our brains are wired to focus on the negative. We have to actively train them to see the positive.",
        bgColor: "#fffbeb", // amber-50
        textColor: "#78350f", // amber-900
      },
      {
        id: "slide2",
        type: "text",
        title: "The Velcro Effect",
        content: "Psychologists say the brain is like Velcro for negative experiences and Teflon for positive ones. They just slide right off.",
        bgColor: "#92400e", // amber-800
        textColor: "#ffffff",
      },
      {
        id: "slide3",
        type: "quote",
        content: "Enjoy the little things, for one day you may look back and realize they were the big things.",
        bgColor: "#fde68a", // amber-200
        textColor: "#78350f",
      },
      {
        id: "slide4",
        type: "text",
        content: "You don't need a grand event to feel joy. A warm cup of coffee, the sun on your face, or a comfortable pair of socks is enough.",
        bgColor: "#d97706", // amber-600
        textColor: "#ffffff",
      },
      {
        id: "slide5",
        type: "exercise",
        title: "Pause and Appreciate",
        content: "Look around you right now. Find one small thing you are grateful for, and focus on it for 10 seconds.",
        bgColor: "#fef3c7", // amber-100
        textColor: "#92400e", // amber-800
      }
    ]
  }
];
