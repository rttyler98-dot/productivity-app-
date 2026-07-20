import type { Lesson } from './types';

export const lessonsData: Lesson[] = [
  {
    id: "power-of-small-wins", size: "medium", unit: "coping-with-anxiety", day: 2,
    title: "Small Wins",
    description: "Start small when feeling overwhelmed.",
    coverImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d1b5?q=80&w=600&auto=format&fit=crop",
    tags: ['peace', 'compassion'],
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
    id: "reframing-thoughts", size: "small",
    title: "Inner Critic",
    description: "Be kind to your mind.",
    coverImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d1b5?q=80&w=600&auto=format&fit=crop",
    tags: ['compassion', 'peace'],
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
    id: "finding-joy", size: "medium", unit: "finding-light", day: 2,
    title: "Noticing Joy",
    description: "Train your brain to see the good.",
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop",
    tags: ['joy', 'presence'],
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
  },
  {
    id: "letting-go", size: "small",
    title: "Letting Go",
    description: "Release the need to control everything.",
    coverImage: "https://images.unsplash.com/photo-1518241353330-0f7941c2d1b5?q=80&w=600&auto=format&fit=crop",
    tags: ['peace', 'compassion'],
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "droplet",
        title: "The Grip",
        content: "Holding on tightly only hurts your hands.",
        bgColor: "#0f766e", // Deep teal
        textColor: "#ffffff",
        bgAnimation: "waves", // Trying to control the waves
      },
      {
        id: "slide2",
        type: "text",
        content: "We suffer when we try to steer the river.",
        bgColor: "#115e59",
        textColor: "#ccfbf1",
        bgAnimation: "none",
      },
      {
        id: "slide3",
        type: "quote",
        content: "Some things are simply not yours to carry.",
        bgColor: "#0d9488",
        textColor: "#ffffff",
        bgAnimation: "float", // Releasing, floating away
      },
      {
        id: "slide4",
        type: "exercise",
        title: "Open your hands.",
        content: "Literally. Open your palms right now. Let it fall.",
        bgColor: "#14b8a6",
        textColor: "#ffffff",
        bgAnimation: "breathe",
      }
    ]
  },
  {
    id: "grounding-now", size: "large", unit: "coping-with-anxiety", day: 1,
    title: "Here, Now",
    description: "Anchor yourself when anxiety spirals.",
    coverImage: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=600&auto=format&fit=crop",
    tags: ['presence', 'peace'],
    slides: [
      {
        id: "slide1",
        type: "title",
        icon: "star",
        title: "The Spiral",
        content: "Your mind is racing into the future.",
        bgColor: "#4c0519", // Deep dark rose/burgundy
        textColor: "#ffffff",
        bgAnimation: "pulse", // Fast heartbeat
      },
      {
        id: "slide2",
        type: "text",
        content: "But you are not there. You are here.",
        bgColor: "#881337",
        textColor: "#ffe4e6",
        bgAnimation: "none",
      },
      {
        id: "slide3",
        type: "text",
        content: "Feel your feet on the floor.\nThe weight of your body.",
        bgColor: "#9f1239",
        textColor: "#ffffff",
        bgAnimation: "float",
      },
      {
        id: "slide4",
        type: "exercise",
        title: "Name three things.",
        content: "Find three things you can see in this exact moment.",
        bgColor: "#be123c",
        textColor: "#ffffff",
        bgAnimation: "breathe", // Slowing down the heart rate
      }
    ]
  },
  {
    id: "morning-light", size: "large", unit: "finding-light", day: 1,
    title: 'The Morning Light',
    description: 'How the sun sets the rhythm for your day.',
    coverImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop',
    tags: ['joy', 'presence'],
    slides: [
      {
        id: 'slide-1',
        type: "title",
        icon: 'sun',
        title: 'We are wired for light.',
        content: 'Morning sunlight signals to your brain that a new cycle has begun.',
        bgColor: "#78350f",
        textColor: "#ffffff",
        bgAnimation: 'breathe'
      },
      {
        id: 'slide-2',
        type: "text",
        title: 'It wakes up your cells.',
        content: 'Just 10 minutes outside boosts serotonin and regulates your sleep later tonight.',
        bgColor: "#b45309",
        textColor: "#ffffff",
        bgAnimation: 'float'
      },
      {
        id: 'slide-3',
        type: "exercise",
        icon: 'sun',
        title: 'Step outside.',
        content: 'Before the noise begins, let the light remind you that you are alive.',
        bgColor: "#d97706",
        textColor: "#ffffff",
        bgAnimation: 'pulse'
      }
    ]
  },
  {
    id: "dopamine-trap", size: "medium", unit: "finding-light", day: 3,
    title: 'The Morning Trap',
    description: 'Protecting your first hour from artificial spikes.',
    coverImage: 'https://images.unsplash.com/photo-1554629947-334ff61d85dc?q=80&w=600&auto=format&fit=crop',
    tags: ['presence', 'peace'],
    slides: [
      {
        id: 'slide-1',
        type: "title",
        icon: 'bolt',
        title: 'The instant reach.',
        content: 'Opening your phone or reaching for sugar the second you wake up.',
        bgColor: "#450a0a",
        textColor: "#ffffff",
        bgAnimation: 'pulse'
      },
      {
        id: 'slide-2',
        type: "text",
        title: 'It hijacks your baseline.',
        content: 'A massive, artificial dopamine spike early on makes everything else feel dull for the rest of the day.',
        bgColor: "#7f1d1d",
        textColor: "#ffffff",
        bgAnimation: 'float'
      },
      {
        id: 'slide-3',
        type: "text",
        title: 'Delay the reward.',
        content: 'Wait just one hour. Drink water. Look out the window. Stretch.',
        bgColor: "#991b1b",
        textColor: "#ffffff",
        bgAnimation: 'waves'
      },
      {
        id: 'slide-4',
        type: "exercise",
        icon: 'mountain',
        title: 'Reclaim the morning.',
        content: 'When you control the first hour, you control the momentum of your entire day.',
        bgColor: "#b91c1c",
        textColor: "#ffffff",
        bgAnimation: 'breathe'
      }
    ]
  },
  {
    id: "the-weight", size: "small", unit: "coping-with-anxiety", day: 3,
    title: 'The Weight',
    description: 'Shrinking the timeline when you feel overwhelmed.',
    coverImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    tags: ['peace', 'compassion'],
    slides: [
      {
        id: 'slide-1',
        type: "title",
        icon: 'mountain',
        title: 'The mountain.',
        content: 'Looking at everything you have to do, all at once, is paralyzing.',
        bgColor: "#0f172a",
        textColor: "#ffffff",
        bgAnimation: 'waves'
      },
      {
        id: 'slide-2',
        type: "text",
        title: 'The brain panics.',
        content: 'It perceives the entire week’s workload as an immediate, singular threat.',
        bgColor: "#1e293b",
        textColor: "#ffffff",
        bgAnimation: 'pulse'
      },
      {
        id: 'slide-3',
        type: "text",
        title: 'Shrink the timeline.',
        content: 'Don’t think about tomorrow. Don’t even think about the afternoon.',
        bgColor: "#334155",
        textColor: "#ffffff",
        bgAnimation: 'float'
      },
      {
        id: 'slide-4',
        type: "exercise",
        icon: 'star',
        title: 'Just the next step.',
        content: 'What is the one, tiny thing you can do in the next five minutes? Just do that.',
        bgColor: "#475569",
        textColor: "#ffffff",
        bgAnimation: 'breathe'
      }
    ]
  },
  {
    id: "grace", size: "medium",
    title: 'Grace',
    description: 'The quiet act of forgiving yourself.',
    coverImage: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=600&auto=format&fit=crop',
    tags: ['compassion', 'peace'],
    slides: [
      {
        id: 'slide-1',
        type: "title",
        icon: 'cloud',
        title: 'The heavy debt.',
        content: 'We carry our past mistakes like stones, convinced we must keep holding them.',
        bgColor: "#4a044e",
        textColor: "#ffffff",
        bgAnimation: 'float'
      },
      {
        id: 'slide-2',
        type: "text",
        title: 'You are allowed to drop them.',
        content: 'Punishing yourself indefinitely does not change the past. It only ruins the present.',
        bgColor: "#701a75",
        textColor: "#ffffff",
        bgAnimation: 'waves'
      },
      {
        id: 'slide-3',
        type: "exercise",
        icon: 'heart',
        title: 'Extend some grace.',
        content: 'You did what you could with who you were then. Let it go. Begin again.',
        bgColor: "#86198f",
        textColor: "#ffffff",
        bgAnimation: 'breathe'
      }
    ]
  }
];
