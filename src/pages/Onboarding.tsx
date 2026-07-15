import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useUserProfile } from '../hooks/useUserProfile';
import { BackgroundEffects } from '../components/Story/BackgroundEffects';
import { AnimatedIcon } from '../components/Story/AnimatedIcon';

const FEELING_OPTIONS = [
  { id: 'overwhelmed', label: 'Overwhelmed', description: 'Everything feels like too much.' },
  { id: 'numb', label: 'Numb', description: 'Feeling disconnected or empty.' },
  { id: 'sad', label: 'Heavy', description: 'Carrying a deep sadness.' },
  { id: 'anxious', label: 'Anxious', description: 'Mind racing, hard to settle.' },
];

const GOAL_OPTIONS = [
  { id: 'peace', label: 'Find Peace', description: 'Quiet the noise and rest.' },
  { id: 'presence', label: 'Be Present', description: 'Connect with right now.' },
  { id: 'joy', label: 'Notice Joy', labelShort: 'Joy', description: 'See the small, good things.' },
  { id: 'compassion', label: 'Self-Compassion', description: 'Be kinder to myself.' },
];

const TIME_OPTIONS = [
  { id: 'small', label: '3-5 minutes', description: 'Just a quick breather.' },
  { id: 'medium', label: '10 minutes', description: 'A moment to reflect.' },
  { id: 'large', label: '15+ minutes', description: 'Deep dive into myself.' },
];

export function Onboarding() {
  const navigate = useNavigate();
  const { completeOnboarding } = useUserProfile();

  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [feeling, setFeeling] = useState('');
  const [goal, setGoal] = useState('');
  const [time, setTime] = useState('');

  const handleNext = (overrideFeeling?: string, overrideGoal?: string, overrideTime?: string) => {
    const currentFeeling = overrideFeeling || feeling;
    const currentGoal = overrideGoal || goal;
    const currentTime = overrideTime || time;

    if (step === 0 && name.trim() === '') return;
    if (step === 1 && !currentFeeling) return;
    if (step === 2 && !currentGoal) return;

    if (step === 3) {
      if (!currentTime) return;
      completeOnboarding(name.trim(), currentFeeling, currentGoal, currentTime);
      navigate('/');
      return;
    }

    setStep((prev) => prev + 1);
  };

  const slideVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-hidden bg-[#2D3047]">
      {/* Background that adapts slightly per step */}
      <BackgroundEffects
        type={step === 0 ? 'float' : step === 1 ? 'waves' : 'breathe'}
      />

      <div className="relative z-10 w-full h-full flex flex-col justify-between px-8 py-16">

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mb-12">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === step ? 'w-8 bg-white' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>

        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step0"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="flex flex-col gap-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 opacity-80">
                  <AnimatedIcon name="star" />
                </div>
                <h1 className="text-4xl md:text-5xl font-serif text-white text-center leading-tight">
                  Welcome.<br />
                  <span className="text-white/70">What should we call you?</span>
                </h1>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white text-xl placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all text-center mt-4"
                  onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                  autoFocus
                />
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step1"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-3xl md:text-4xl font-serif text-white text-center leading-tight mb-4">
                  Hi {name}.<br />
                  <span className="text-white/70">How are you feeling today?</span>
                </h1>
                <div className="grid gap-3">
                  {FEELING_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setFeeling(opt.id);
                        setTimeout(() => handleNext(opt.id), 400); // Auto-advance after small delay
                      }}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                        feeling === opt.id
                          ? 'bg-white/20 border-white/50 scale-[1.02]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-white font-medium text-lg">{opt.label}</div>
                      <div className="text-white/60 text-sm mt-1">{opt.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-3xl md:text-4xl font-serif text-white text-center leading-tight mb-4">
                  What are you hoping to find here?
                </h1>
                <div className="grid gap-3">
                  {GOAL_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setGoal(opt.id);
                        setTimeout(() => handleNext(undefined, opt.id), 400); // Auto-advance after small delay
                      }}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                        goal === opt.id
                          ? 'bg-white/20 border-white/50 scale-[1.02]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-white font-medium text-lg">{opt.label}</div>
                      <div className="text-white/60 text-sm mt-1">{opt.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-3xl md:text-4xl font-serif text-white text-center leading-tight mb-4">
                  How much time can you commit daily?
                </h1>
                <div className="grid gap-3">
                  {TIME_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setTime(opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                        time === opt.id
                          ? 'bg-white/20 border-white/50 scale-[1.02]'
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-white font-medium text-lg">{opt.label}</div>
                      <div className="text-white/60 text-sm mt-1">{opt.description}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Navigation Button */}
        <div className="mt-8">
          <button
            onClick={() => handleNext()}
            disabled={
              (step === 0 && name.trim() === '') ||
              (step === 1 && !feeling) ||
              (step === 2 && !goal) ||
              (step === 3 && !time)
            }
            className="w-full bg-white text-blue-900 font-semibold py-4 rounded-2xl text-lg disabled:opacity-40 disabled:scale-100 active:scale-[0.98] transition-all shadow-xl shadow-black/20"
          >
            {step === 3 ? 'Begin' : 'Continue'}
          </button>
        </div>

      </div>
    </div>
  );
}
