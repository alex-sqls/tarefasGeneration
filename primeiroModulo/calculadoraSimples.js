/*
Com base na tabela abaixo, escreva um algoritmo que simule uma Calculadora simples. O programa deverá ler dois números reais: numero1 e numero2, e na sequência ler o Código da operação matemática (número inteiro entre 1 e 4). A seguir, mostre na tela o resultado da operação entre os 2 números. Caso o número da operação esteja fora do intervalo entre 1 e 4, mostre a mensagem na tela Operação Inválida!
*/
 const readline = require("readline-sync")

const num1 = readline.questionFloat('digite o 1. numero: ')
const num2 = readline.questionFloat('digite o 2. numero: ')
const operacao = readline.questionInt('digite o codigo da operacao: ')
let res

switch (operacao) {
    case 1:
        res = (num1+num2).toFixed(2)
        console.log(`${num1} + ${num2} = ${res}`)
        break;
    case 2:
        res = (num1-num2).toFixed(2)
        console.log(`${num1} - ${num2} = ${res}`)
        break
    case 3:
        res = (num1*num2).toFixed(2)
        console.log(`${num1} * ${num2} = ${res}`)
        break
    case 4: 
        res = (num1/num2).toFixed(2)
        console.log(`${num1} / ${num2} = ${res}`)
    default:
        console.log("operacao invalida")
        break;
}
