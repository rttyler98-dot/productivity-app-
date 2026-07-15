const fs = require('fs');
let code = fs.readFileSync('src/pages/Onboarding.tsx', 'utf-8');

code = code.replace(
  `  const handleNext = () => {
    if (step === 0 && name.trim() === '') return;
    if (step === 1 && !feeling) return;
    if (step === 2 && !goal) return;

    if (step === 3) {
      if (!time) return;
      completeOnboarding(name.trim(), feeling, goal, time);
      navigate('/');
      return;
    }

    setStep((prev) => prev + 1);
  };`,
  `  const handleNext = (overrideFeeling?: string, overrideGoal?: string, overrideTime?: string) => {
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
  };`
);

code = code.replace(
  `                        setFeeling(opt.id);
                        setTimeout(handleNext, 400); // Auto-advance after small delay`,
  `                        setFeeling(opt.id);
                        setTimeout(() => handleNext(opt.id), 400); // Auto-advance after small delay`
);

code = code.replace(
  `                        setGoal(opt.id);
                        setTimeout(handleNext, 400); // Auto-advance after small delay`,
  `                        setGoal(opt.id);
                        setTimeout(() => handleNext(undefined, opt.id), 400); // Auto-advance after small delay`
);

fs.writeFileSync('src/pages/Onboarding.tsx', code);
