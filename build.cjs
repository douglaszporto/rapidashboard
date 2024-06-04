let path = require('path');
let fs = require('fs');

let content = fs.readFileSync(path.join(__dirname, 'dist/types.d.ts'), 'utf-8');
let newContent = content + '\ndeclare module \'rapidashboard\';';

fs.writeFileSync(path.join(__dirname, 'dist/types.d.ts'), newContent);