import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoryViewer } from '../components/Story/StoryViewer';
import { lessonsData } from '../data/lessons';

export const LessonViewer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const lesson = lessonsData.find(l => l.id === id);

  useEffect(() => {
    if (!lesson) {
      navigate('/');
    }
  }, [lesson, navigate]);

  if (!lesson) return null;

  const handleComplete = () => {
    // Save progress
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes(lesson.id)) {
      completed.push(lesson.id);
      localStorage.setItem('completedLessons', JSON.stringify(completed));
    }
    navigate('/');
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <StoryViewer
      slides={lesson.slides}
      onComplete={handleComplete}
      onClose={handleClose}
    />
  );
};
