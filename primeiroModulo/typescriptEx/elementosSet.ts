import ler = require("readline-sync")

const list: Set<number> = new Set<number>();
const listaOrdenada: Array<number> = new Array<number>();

for (let i = 0; i < 10; i++) {
    list.add(ler.questionInt("qual cor quer adicionar: "))
}
for (const valor of list) {
    listaOrdenada.push(valor)
}
listaOrdenada.sort((a, b) => a - b);
console.log(listaOrdenada)