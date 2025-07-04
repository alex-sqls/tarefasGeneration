const leia = require("readline-sync");

let matriz: number[][] = new Array(3);
const diagonalPrincipal: Array<number> = new Array<number>();
const diagonalSecundaria: Array<number> = new Array<number>();
let somaPrincipal: number = 0;
let somaSecundaria: number = 0;

for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
    matriz[indiceLinha] = Array(3);
}

for (let i = 0; i < matriz.length; i++){
    for (let indiceColuna = 0; indiceColuna < matriz.length; indiceColuna++){
       matriz[i][indiceColuna] = leia.questionInt(`Digite o numero do elemento [${i}][${indiceColuna}]: `);
    }
    diagonalPrincipal.push(matriz[i][i])
    diagonalSecundaria.push(matriz[i][matriz.length - 1 - i])
    somaPrincipal += diagonalPrincipal[i]
    somaSecundaria += diagonalSecundaria[i]
}

console.log(somaPrincipal)
console.log(somaSecundaria)