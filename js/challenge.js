// KARLA JAQUELINE MUÑOZ TREJO TI31

let challenge = "30 Days of JavaScript";
console.log(challenge);
console.log(challenge.length);
// Mayúsculas
console.log(challenge.toUpperCase());
// Minúsculas
console.log(challenge.toLowerCase());
// Cortar primera palabra
console.log(challenge.substring(2, 21));
// Cortar frase "Days of JavaScript"
console.log(challenge.substring(0, 2))
// Incluye
console.log(challenge.includes('Script'));
// Split
console.log(challenge.split());
// Dividir en el espacio
console.log(challenge.split(' '));
// Cambiar cadena a matriz, dividir por comas
let cadena = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(cadena.split(','));
// Reemplazar
console.log(challenge.replace('JavaScript', 'Node'));

// PREGUNTAS

// CharAT
console.log(challenge.charAt(15));
// CharCodeAt
console.log(challenge.charCodeAt('J'));
// IndexOF (no cuenta espacios)
console.log(challenge.indexOf('a'));
// LastIndexOF
console.log(challenge.lastIndexOf('a'));
// Oración nueva  con "porque"
let pq = "No puedes terminar una oración con porque porque porque es una conjunción"
console.log(pq.indexOf('porque'));
// Last
console.log(pq.lastIndexOf('porque'));
// Search
console.log(pq.search('porque'));

// ÚLTIMOS EJERCICIOS

// Trim
console.log(challenge.trim(' '));
// StartWith
console.log(challenge.startsWith('3'));
// EndsWith
console.log(challenge.endsWith('t'));
// Match
console.log(challenge.match('a'));
// concat
let cad1 = "30 días de ";
let cad2 = "JavaScript";
console.log(cad1.concat(cad2));
// Repetir
console.log(challenge.repeat(2));