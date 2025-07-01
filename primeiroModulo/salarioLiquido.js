const readline = require("readline-sync");

let salarioBruto = readline.questionFloat("Digite seu salario bruto: ");
let adcNoturno = readline.questionFloat("Digite seu adicional noturno: ");
let horasExtras = readline.questionFloat("Digite sua Horas Extras: ");
let descontos = readline.questionFloat("Digite seus descontos: ");

const salarioLiquido = () => {
    return salarioBruto+adcNoturno+
    (horasExtras*5)-descontos;
};
console.log(salarioLiquido().toFixed(2))