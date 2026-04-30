// &#39;fs&#39; = File System module — lets you work with files
const fs = require('fs');
// &#39;path&#39; = Path module — helps build file paths correctly
const path = require('path');
// --- WRITE a file ---
// Creates &#39;notes.txt&#39; and writes text into it
// If the file already exists, it overwrites it
fs.writeFileSync('notes.txt', 'Gul E Haram 2502111 WebTechnologies');
fs.appendFileSync('notes.txt', 'More text added.');
console.log('File created!');
// --- READ a file ---
// &#39;utf8&#39; tells Node to read it as normal text
const content = fs.readFileSync('notes.txt', 'utf8');
console.log('File says: ' + content);
// --- CHECK if file exists ---
const exists = fs.existsSync('notes.txt');
console.log('File exists? ' + exists);
// --- PATH module ---
// __dirname is a special variable — it holds your current folder path
console.log('Current folder: ' + __dirname);
console.log('Full path: ' + path.join(__dirname, 'notes.txt'));


