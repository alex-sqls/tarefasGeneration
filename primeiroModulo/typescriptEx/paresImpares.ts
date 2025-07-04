/*
Escreva um algoritmo, que leia 10 números inteiros via teclado e mostre na tela quantos números são pares e quantos número são ímpares
*/
import ler = require("readline-sync")

let par: number = 0;
let impar: number = 0;
let entrada: number;

for (let i = 0; i < 10; i++) {
      entrada = ler.questionInt(`Digite o ${i+1} numero: `)
      if(entrada % 2 == 0) par++
      if(entrada % 2 != 0) impar++
}

console.log(`Total de pares: ${par}`)
console.log(`Total de impares: ${impar}`)
