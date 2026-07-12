import { useState, useEffect } from 'react';

export interface UserProfile {
  hasCompletedOnboarding: boolean;
  name: string;
  feeling: string;
  goal: string;
}

const DEFAULT_PROFILE: UserProfile = {
  hasCompletedOnboarding: false,
  name: '',
  feeling: '',
  goal: '',
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_PROFILE;
      }
    }
    return DEFAULT_PROFILE;
  });

  useEffect(() => {
    localStorage.setItem('user_profile', JSON.stringify(profile));
  }, [profile]);

  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({ ...prev, ...updates }));
  };

  const completeOnboarding = (name: string, feeling: string, goal: string) => {
    setProfile({
      hasCompletedOnboarding: true,
      name,
      feeling,
      goal,
    });
  };

  const resetProfile = () => {
    setProfile(DEFAULT_PROFILE);
  };

  return {
    profile,
    updateProfile,
    completeOnboarding,
    resetProfile,
  };
}
