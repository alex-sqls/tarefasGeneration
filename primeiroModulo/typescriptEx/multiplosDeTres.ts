/*
 leia números inteiros via teclado, até que o número zero seja digitado. Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3
*/

import ler = require("readline-sync")
let controle: number;
let num: number = 0;
let cont: number = 0;
let media: number;

do {
    controle = ler.questionInt("Digite um numero: ")
    if(controle % 3 == 0 && controle > 0) {
        num = num+=controle
        cont++
    }
} while (controle != 0);

media = num/cont
console.log(`A media de todos os numeros multiplos de 3 e ${media}`)