/*
Faca uma entrada do usuario com as cores
adicione elas em um array
Mostre na tela todas as cores adicionadas. 
Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/
let ler = require("readline-sync");
const list: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
      list.push(ler.question("qual cor quer adicionar: "));
}
console.log(list.sort());