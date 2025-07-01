// 1: saldo
// 2: saque
// 3: Deposito
const readline = require("readline-sync");
const operacao = readline.questionInt('digite a operacao: ');
let valor;
let saldo = 1000;

switch (operacao) {
    case 1:
        console.log(`saldo: R$ ${saldo}`)
        break;
    case 2:
        valor = readline.questionInt('valor: ')
        let saque = valor>saldo ? "saldo insuficiente" :
        `Novo saldo: ${saldo -= valor}`; 
        console.log(saque);
        break;
        case 3:
            valor = readline.questionInt('Valor: ');
            saldo += valor;
            console.log(`Novo saldo: ${saldo}`);
            break;
        case 4:
            valor = readline.questionInt('valor: ');
            console.log('operacao invalida');
            break;
    default:
        console.log('operacao invalida');
        break;
}
