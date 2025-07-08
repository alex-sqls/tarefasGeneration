import ler = require("readline-sync");
import { Stack } from "./stackMetodos";

const fila = new Stack<string>();

let continua: number;

    console.log("### 1 Adicionar livro na pilha ############");
    console.log("### 2 Listar todos os livros ########");
    console.log("### 3 retirar livro da pilha #########");
    console.log("### Digite 0 para sair #########");

do {
    continua = ler.questionInt("Digite uma opcao: ")
    if(continua == 1) {
        fila.push(ler.question("Nome: "))
        console.log('livro adicionado adicionado')
    } else if (continua == 2){
        fila.printStack();
    } else if(continua == 3) {
        fila.pop();
    }

} while (continua !== 0);
console.log("O programa foi finalizado!");