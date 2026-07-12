import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Heart, Sparkles, Moon } from 'lucide-react';
import { lessonsData } from '../data/lessons';

export const Home = () => {
  const navigate = useNavigate();
  const [gratitudeEntry, setGratitudeEntry] = useState('');
  const [savedGratitudes, setSavedGratitudes] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

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

  return (
    <div className="h-full overflow-y-auto bg-brand-bg no-scrollbar pb-20">
      {/* Header */}
      <div className="pt-12 px-6 pb-6 bg-white rounded-b-3xl shadow-sm border-b border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Good morning.</h1>
        <p className="text-gray-500">Take a moment for yourself today.</p>
      </div>

      <div className="px-6 py-8 space-y-10">

        {/* Daily Gratitude Section */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-brand-primary">
            <Heart size={20} className="fill-current" />
            <h2 className="text-xl font-bold text-gray-900">Daily Gratitude</h2>
          </div>
          <div className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
            <form onSubmit={saveGratitude}>
              <input
                type="text"
                placeholder="What made you smile today?"
                className="w-full bg-gray-50 text-gray-800 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 placeholder-gray-400"
                value={gratitudeEntry}
                onChange={(e) => setGratitudeEntry(e.target.value)}
              />
              <div className="mt-3 flex justify-end">
                <button
                  type="submit"
                  disabled={!gratitudeEntry.trim()}
                  className="bg-brand-primary text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-brand-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Save
                </button>
              </div>
            </form>

            {savedGratitudes.length > 0 && (
              <div className="mt-6 space-y-3">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recent entries</h3>
                {savedGratitudes.map((g, i) => (
                  <div key={i} className="flex gap-3 items-start text-sm text-gray-600 bg-gray-50/50 p-3 rounded-2xl">
                    <Sparkles size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <p>{g}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Micro Lessons Section */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-brand-secondary">
            <BookOpen size={20} />
            <h2 className="text-xl font-bold text-gray-900">Discover</h2>
          </div>
          <div className="grid gap-4">
            {lessonsData.map((lesson) => {
              const isCompleted = completedLessons.includes(lesson.id);
              return (
                <div
                  key={lesson.id}
                  onClick={() => navigate(`/lesson/${lesson.id}`)}
                  className={`relative overflow-hidden group cursor-pointer p-6 rounded-3xl transition-transform hover:scale-[1.02] active:scale-[0.98] ${lesson.coverImage}`}
                >
                  <div className="relative z-10">
                    {isCompleted && (
                      <span className="inline-block bg-white/30 text-xs font-bold px-2 py-1 rounded-full mb-3 text-gray-800 backdrop-blur-sm">
                        Completed
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
                    <p className="text-gray-700 text-sm font-medium leading-relaxed opacity-90">{lesson.description}</p>
                  </div>
                  {/* Decorative background circle */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-colors"></div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Supportive Footer */}
        <div className="text-center pb-8 pt-4">
          <Moon size={24} className="mx-auto text-gray-300 mb-3" />
          <p className="text-xs text-gray-400">Remember, healing is not linear.<br/>Be gentle with yourself.</p>
        </div>

      </div>
    </div>
  );
};
