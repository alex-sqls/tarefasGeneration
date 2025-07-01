/*
Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo
*/

const readline = require("readline-sync");

let num = readline.questionInt('Digite um numero: ');

if (num % 2 == 0) {
    if(num < 0) console.log(`O numero ${num} e par negativo`);
    if(num > 0) console.log(`O numero ${num} e par positivo`);
} else if(num % 2 != 0) {
    if(num < 0) console.log(`O numero ${num} e impar negativo`);
    if(num > 0) console.log(`O numero ${num} e impar positivo`);
};