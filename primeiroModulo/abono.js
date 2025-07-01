//Calcule o novo salario do colaborador com a adicao do abono
/*
1. o usuario deve digitar o salario
e o abono salario
2. o programa vai processar esse acrescimo
*/
const readline = require("readline-sync")

let salario = readline.questionFloat("Digite seu salario: ")
let abono = readline.questionFloat("digite o valor do abono: ")

let novoSalario = () => {
    return salario+=abono
}
console.log(novoSalario().toFixed(2))