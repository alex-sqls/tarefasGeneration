const readline = require("readline-sync");

let numero1 = readline.questionFloat("numero 1: ");
let numero2 = readline.questionFloat("numero 2: ");
let numero3 = readline.questionFloat("numero 3: ");
let numero4 = readline.questionFloat("numero 4: ");

const diferenca = () => {
    return (numero1*numero2)-(numero3*numero4)
};

console.log(diferenca().toFixed(2));