const words = (n) => n.split(' ');
const sentence = (n) => n.join(' ');
const yell = (n) => n.toUpperCase();
const whisper = (n) => '*' + n.toLowerCase() + '*';
const capitalize = (n) => String(n.charAt(0).toUpperCase() + n.slice(1).toLowerCase());