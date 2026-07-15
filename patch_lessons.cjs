const fs = require('fs');

let content = fs.readFileSync('src/data/lessons.ts', 'utf8');

// Replace standard exports with updated data structure
content = content.replace(/id: "power-of-small-wins",/g, 'id: "power-of-small-wins", size: "medium", unit: "coping-with-anxiety", day: 2,');
content = content.replace(/id: "reframing-thoughts",/g, 'id: "reframing-thoughts", size: "small",');
content = content.replace(/id: "finding-joy",/g, 'id: "finding-joy", size: "medium", unit: "finding-light", day: 2,');
content = content.replace(/id: "letting-go",/g, 'id: "letting-go", size: "small",');
content = content.replace(/id: "grounding-now",/g, 'id: "grounding-now", size: "large", unit: "coping-with-anxiety", day: 1,');
content = content.replace(/id: 'morning-light',/g, 'id: "morning-light", size: "large", unit: "finding-light", day: 1,');
content = content.replace(/id: 'dopamine-trap',/g, 'id: "dopamine-trap", size: "medium", unit: "finding-light", day: 3,');
content = content.replace(/id: 'the-weight',/g, 'id: "the-weight", size: "small", unit: "coping-with-anxiety", day: 3,');
content = content.replace(/id: 'grace',/g, 'id: "grace", size: "medium",');

fs.writeFileSync('src/data/lessons.ts', content);
