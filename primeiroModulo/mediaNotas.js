const readline = require("readline-sync");

let primeiraNota = readline.questionFloat("Nota 1: ");
let segundaNota = readline.questionFloat("Nota 2: ");
let terceiraNota = readline.questionFloat("Nota 3: ");
let quartaNota = readline.questionFloat("Nota 4: ");

const media = () => (primeiraNota+segundaNota+terceiraNota+quartaNota)/4;
console.log(`A media dos valores: ${media().toFixed(2)}`);