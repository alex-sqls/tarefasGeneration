/*
No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5
*/
const readline = require("readline-sync");

let num1 = readline.questionInt('Digite o primeiro intervalo: ');
const num2 = readline.questionInt('Digite o segundo intervalo: ');


const operacao = () =>{
    if(num1>num2) return console.log('intervalo invalido');
    
    for (num1; num1 <= num2; num1++) {
    if(num1 % 3 == 0 && num1 % 15 == 0) console.log(`${num1} e multiplo de 3 e 15`);
     
    }
}

operacao();