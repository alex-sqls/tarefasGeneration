/*
Desenvolva um algoritmo que leia 3
valores inteiros A, B e C e imprima
na tela se a soma de A + B é maior, menor
ou igual a C.
*/
const readline = require("readline-sync");

let numA = readline.questionFloat("Numero A: ");
let numB = readline.questionFloat("Numero B: ");
let numC = readline.questionFloat("Numero C: ");

const somaMaior = () => {
    soma = numA+numB;

    const diferenteIgual = soma>numC ? `Maior` :
    soma<numC ? `menor` :
    `igual`;

    return `a soma de ${numA} + ${numB} = ${soma} e ${diferenteIgual} que ${numC}`
    
}
console.log(somaMaior());
