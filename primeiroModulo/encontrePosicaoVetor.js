const readline = require("readline-sync");
const arrays = [2,3,1,3,4,9,7,8,10,6];

let num = readline.questionInt('Digite o numero que voce deseja encontrar: ');

let verificaNumero = () => {
for (const indice in arrays) {
    if(num == arrays[indice]) return `O numero ${num} esta localizado na posicao ${indice}`;
}
return `O valor ${num} nao foi encontrado`;
}
console.log(verificaNumero());