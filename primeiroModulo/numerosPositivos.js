// mostre na tela a soma de todos os números digitados, que sejam positivos
// o numero 0 sai do programa

const readline = require("readline-sync");

let cont = 0;
let num;

do {
    num = readline.questionInt('Digite um numero: ');
    if(num>0) cont += num;

} while (num != 0);
console.log(`A soma dos numeros positivos e: ${cont}`);