const fs = require('fs');
const lines = fs.readFileSync('public/style.css', 'utf8').split('\n');
console.log('Total lines:', lines.length);

// Check if there are duplicate root declarations
const rootIndices = [];
lines.forEach((l, i) => {
    if (l.trim() === ':root {') rootIndices.push(i + 1);
});
console.log('":root {" found at lines:', rootIndices);
