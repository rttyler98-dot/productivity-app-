import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Flame, Play, Target } from 'lucide-react';
import { lessonsData } from '../data/lessons';
import { unitsData } from '../data/units';
import { motion } from 'framer-motion';
import { useUserProfile } from '../hooks/useUserProfile';
import { format } from 'date-fns';

export const Home = () => {
  const navigate = useNavigate();
  const { profile } = useUserProfile();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    if (!profile.hasCompletedOnboarding) {
      navigate('/onboarding', { replace: true });
    }
  }, [profile.hasCompletedOnboarding, navigate]);

  useEffect(() => {
    const completed = localStorage.getItem('completedLessons');
    if (completed) {
      const parsed = JSON.parse(completed);
      setCompletedLessons(parsed);
      // Dummy streak calc for visual purposes
      setStreak(parsed.length > 0 ? 3 : 0);
    }
  }, []);

  const containerVariants = {
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

  // Grouping logic
  const todayGoalLessons = lessonsData.filter(l => l.tags.includes(profile.goal || 'peace'));
  const largeFeatured = todayGoalLessons.find(l => l.size === 'large') || lessonsData.find(l => l.size === 'large');

  // Get unique units
  const activeUnits = unitsData.filter(u => {
    // Show units that match goals, or just take the first few
    const firstLesson = lessonsData.find(l => l.id === u.lessons[0]);
    return firstLesson?.tags.includes(profile.goal || 'peace') || true;
  }).slice(0, 2); // Show top 2 units

  const getDayLabel = () => format(new Date(), 'EEEE, MMM d');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full overflow-y-auto bg-[#F9FAFB] no-scrollbar pb-24" // Soft light gray background
    >
      <motion.div
        className="px-5 pt-12 space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Header - Nibble Style */}
        <motion.div variants={itemVariants} className="flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">{getDayLabel()}</p>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">For You</h1>
          </div>
          <div className="flex items-center gap-1.5 bg-orange-100 px-3 py-1.5 rounded-full text-orange-600 font-bold text-sm">
            <Flame size={16} className="fill-orange-500" />
            {streak}
          </div>
        </motion.div>

        {/* Weekly Streak Tracker (Visual dummy) */}
        <motion.div variants={itemVariants} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex justify-between items-center px-6">
          {['M','T','W','T','F','S','S'].map((day, i) => (
             <div key={i} className={`flex flex-col items-center gap-1 ${i === 2 ? 'opacity-100' : 'opacity-40'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i === 2 ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {i < 2 ? '✓' : day}
                </div>
             </div>
          ))}
        </motion.div>

        {/* Featured Big Card (If time allows a large lesson) */}
        {profile.time !== 'small' && largeFeatured && (
          <motion.section variants={itemVariants}>
            <div className="flex justify-between items-end mb-4">
               <h2 className="text-xl font-bold text-gray-900">Today's Focus</h2>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/lesson/${largeFeatured.id}`)}
              className={`relative overflow-hidden cursor-pointer rounded-3xl p-6 h-[220px] flex flex-col justify-end shadow-md ${largeFeatured.coverImage}`}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

              <div className="relative z-20">
                <div className="flex items-center gap-2 text-white/90 text-sm font-bold mb-2 uppercase tracking-wider">
                   <Target size={14} /> Recommended
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{largeFeatured.title}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{largeFeatured.description}</p>
              </div>
            </motion.div>
          </motion.section>
        )}

        {/* Units / Courses */}
        {activeUnits.map(unit => (
          <motion.section variants={itemVariants} key={unit.id} className="pt-2">
            <div className="flex justify-between items-center mb-4">
               <h2 className="text-xl font-bold text-gray-900">{unit.title}</h2>
               <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-100 transition-colors">See path</span>
            </div>

            {/* Horizontal Scroll for Unit Days */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-5 px-5 pb-4">
              {unit.lessons.map((lessonId, idx) => {
                const lesson = lessonsData.find(l => l.id === lessonId);
                if (!lesson) return null;
                const isCompleted = completedLessons.includes(lesson.id);
                const isLocked = !isCompleted && idx > 0 && !completedLessons.includes(unit.lessons[idx-1]);

                return (
                  <motion.div
                    key={lesson.id}
                    whileHover={!isLocked ? { scale: 1.03 } : {}}
                    whileTap={!isLocked ? { scale: 0.97 } : {}}
                    onClick={() => !isLocked && navigate(`/lesson/${lesson.id}`)}
                    className={`min-w-[160px] w-[160px] flex-shrink-0 relative overflow-hidden rounded-[1.5rem] bg-white border border-gray-100 shadow-sm ${isLocked ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} transition-all`}
                  >
                     <div className={`h-[120px] ${lesson.coverImage} relative`}>
                        {isCompleted && (
                          <div className="absolute top-3 right-3 bg-white/90 rounded-full p-1 shadow-sm">
                            <Sparkles size={14} className="text-amber-500" />
                          </div>
                        )}
                     </div>
                     <div className="p-4">
                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider">Day {idx + 1}</p>
                        <h4 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">{lesson.title}</h4>

                        {/* Fake Progress Bar */}
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                           <div className={`h-full ${isCompleted ? 'w-full bg-green-500' : 'w-0'} transition-all`} />
                        </div>
                     </div>
                     {isLocked && (
                       <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center z-10">
                         <div className="bg-white rounded-full p-2 shadow-sm text-gray-400">
                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                         </div>
                       </div>
                     )}
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        ))}

        {/* Quick Bites (Small Lessons) */}
        <motion.section variants={itemVariants} className="pt-2">
          <div className="flex justify-between items-center mb-4">
             <h2 className="text-xl font-bold text-gray-900">Quick Bites</h2>
             <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full cursor-pointer hover:bg-indigo-100 transition-colors">See all</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {lessonsData.filter(l => l.size === 'small' || !l.size).slice(0, 4).map(lesson => (
              <motion.div
                key={lesson.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate(`/lesson/${lesson.id}`)}
                className={`rounded-2xl p-4 flex flex-col justify-between shadow-sm cursor-pointer aspect-square ${lesson.coverImage} relative overflow-hidden`}
              >
                 <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                 <div className="relative z-10">
                   <div className="bg-white/90 w-8 h-8 rounded-full flex items-center justify-center mb-3 shadow-sm text-indigo-600">
                     <Play size={14} className="ml-0.5 fill-current" />
                   </div>
                   <h4 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">{lesson.title}</h4>
                 </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </motion.div>
    </motion.div>
  );
};
