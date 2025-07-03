const readline = require("readline-sync");

let menorIdade = 0;
let terceiraIdade = 0;


while (true) {
    let idade = readline.questionInt('Digite a idade: ');
    if(idade<0) break
    if(idade<21) menorIdade++;
    if(idade>50) terceiraIdade++;
}

console.log(`total de pessoas menores de 21 anos: ${menorIdade}
toral de pessoas maiores de 50 anos: ${terceiraIdade}
    `);
