require('dotenv').config();
const u = process.env.MONGODB_URI || '';
console.log('Length:', u.length);
console.log('First 15 chars:', u.slice(0, 15));
console.log('Has quotes:', u.includes('"') || u.includes("'"));