import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Heart, Sparkles, Moon } from 'lucide-react';
import { lessonsData } from '../data/lessons';
import { motion } from 'framer-motion';
import { useUserProfile } from '../hooks/useUserProfile';

export const Home = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const [gratitudeEntry, setGratitudeEntry] = useState('');
  const [savedGratitudes, setSavedGratitudes] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    if (!profile.hasCompletedOnboarding) {
      navigate('/onboarding', { replace: true });
    }
  }, [profile.hasCompletedOnboarding, navigate]);

  useEffect(() => {
    const saved = localStorage.getItem('gratitudes');
    if (saved) setSavedGratitudes(JSON.parse(saved));

    const completed = localStorage.getItem('completedLessons');
    if (completed) setCompletedLessons(JSON.parse(completed));
  }, []);

  const saveGratitude = (e: React.FormEvent) => {
    e.preventDefault();
    if (!gratitudeEntry.trim()) return;

    const newGratitudes = [gratitudeEntry, ...savedGratitudes].slice(0, 5); // Keep last 5
    setSavedGratitudes(newGratitudes);
    localStorage.setItem('gratitudes', JSON.stringify(newGratitudes));
    setGratitudeEntry('');
  };

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full overflow-y-auto bg-brand-bg no-scrollbar pb-20 pt-16 relative"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-50 to-transparent pointer-events-none" />

      <motion.div
        className="px-6 space-y-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="pt-4 pb-2">
          <h1 className="text-[2.5rem] font-bold text-gray-900 mb-2 font-display leading-tight tracking-tight">
            {profile.name ? `Good morning, ${profile.name}.` : 'Good morning.'}
          </h1>
          <p className="text-lg text-gray-500 font-medium">Take a moment for yourself today.</p>
        </motion.div>

        {/* Daily Gratitude Section */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-2 mb-5 text-indigo-600">
            <motion.div
              animate={gratitudeEntry.length > 0 ? { scale: [1, 1.2, 1] } : {}}
              transition={{ repeat: gratitudeEntry.length > 0 ? Infinity : 0, duration: 1.5 }}
            >
              <Heart size={20} className="fill-current" />
            </motion.div>
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Daily Gratitude</h2>
          </div>
          <div className="bg-white/80 p-6 rounded-[2rem] shadow-soft backdrop-blur-xl border border-white relative overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

            <form onSubmit={saveGratitude}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="What made you smile today?"
                  className="w-full bg-gray-50/50 text-gray-800 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 placeholder-gray-400 font-medium border border-gray-100 transition-all shadow-inner-soft"
                  value={gratitudeEntry}
                  onChange={(e) => setGratitudeEntry(e.target.value)}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={!gratitudeEntry.trim()}
                  className="absolute right-2 top-2 bottom-2 bg-indigo-600 text-white px-5 rounded-xl text-sm font-semibold disabled:opacity-0 disabled:scale-95 transition-all shadow-md flex items-center justify-center"
                >
                  Save
                </motion.button>
              </div>
            </form>

            {savedGratitudes.length > 0 && (
              <div className="mt-6 space-y-3">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Recent entries</h3>
                {savedGratitudes.map((g, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={i}
                    className="flex gap-3 items-center text-sm font-medium text-gray-700 bg-gray-50/80 px-4 py-3.5 rounded-2xl border border-gray-100/50"
                  >
                    <Sparkles size={16} className="text-amber-500 shrink-0" />
                    <p className="truncate">{g}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.section>

        {/* Micro Lessons Section */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-2 mb-5 text-indigo-600">
            <BookOpen size={20} className="transition-transform group-hover:rotate-12" />
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">
              {profile.goal === 'peace' ? 'Your Path to Peace' :
               profile.goal === 'presence' ? 'Your Path to Presence' :
               profile.goal === 'joy' ? 'Your Path to Joy' :
               profile.goal === 'compassion' ? 'Your Path to Kindness' :
               'Discover'}
            </h2>
          </div>
          <div className="grid gap-5">
            {/* Sort lessons to prioritize user's goal if we had mapped tags, for now we just show all but highlight the title above */}
            {lessonsData.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <motion.div
                  key={lesson.id}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                  className={`relative overflow-hidden group cursor-pointer p-7 rounded-[2rem] shadow-soft hover:shadow-float border border-white/40 ${lesson.coverImage} transition-shadow duration-300`}
                >
                  <div className="relative z-10 flex flex-col h-full min-h-[140px] justify-between">
                    <div>
                      {isCompleted && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="inline-flex items-center gap-1 bg-white/40 text-xs font-bold px-3 py-1 rounded-full mb-4 text-gray-900 backdrop-blur-md shadow-sm relative overflow-hidden"
                        >
                          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_3s_infinite] pointer-events-none" />
                          <Sparkles size={12} className="text-amber-600" /> Completed
                        </motion.span>
                      )}
                      <h3 className="text-[1.35rem] font-bold text-gray-900 mb-2 font-display leading-tight">{lesson.title}</h3>
                      <p className="text-gray-800 text-sm font-medium leading-relaxed opacity-90 max-w-[85%]">{lesson.description}</p>
                    </div>
                  </div>
                  {/* Decorative background shapes for card depth */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-3xl group-hover:bg-white/40 transition-colors duration-500"></div>
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent opacity-50 mix-blend-overlay"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Supportive Footer */}
        <motion.div variants={itemVariants} className="text-center pb-10 pt-8">
          <Moon size={24} className="mx-auto text-gray-300 mb-4" />
          <p className="text-xs font-medium text-gray-400 tracking-wide">Remember, healing is not linear.<br/>Be gentle with yourself.</p>
        </motion.div>

      </motion.div>
    </motion.div>
  );
};
