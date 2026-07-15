const fs = require('fs');
let code = fs.readFileSync('src/pages/Onboarding.tsx', 'utf-8');

// Fix the onClick={handleNext} which is passing the synthetic event as a string argument
code = code.replace(
  `onClick={handleNext}`,
  `onClick={() => handleNext()}`
);

fs.writeFileSync('src/pages/Onboarding.tsx', code);
