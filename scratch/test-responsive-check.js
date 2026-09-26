const fs = require('fs');
const css = fs.readFileSync('public/style.css', 'utf8');

console.log('Has max-width: 1024px:', css.includes('@media (max-width: 1024px)'));
console.log('Has max-width: 768px:', css.includes('@media (max-width: 768px)'));
console.log('Has max-width: 380px:', css.includes('@media (max-width: 380px)'));
console.log('Input font-size 16px to prevent iOS zoom:', css.includes('font-size: 16px;'));
console.log('Full width buttons on mobile:', css.includes('width: 100%;'));
