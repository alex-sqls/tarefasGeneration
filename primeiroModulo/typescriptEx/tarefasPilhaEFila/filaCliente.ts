import ler = require("readline-sync");
import { Queue } from "./queueMetodos"

const fila = new Queue<string>();

let continua: number;

    console.log("### 1 Adicionar cliente na fila ############");
    console.log("### 2 Listar todos os clientes ########");
    console.log("### 3 retirar clientes da fila #########");
    console.log("### Digite 0 para sair #########");

do {
    continua = ler.questionInt("Digite uma opcao: ")
    if(continua == 1) {
        fila.enqueue(ler.question("Nome: "));
        console.log('cliente adicionado');
    } else if (continua == 2){
        fila.printQueue();
    } else if(continua == 3) {
        fila.dequeue();
    }

} while (continua !== 0);
console.log("O programa foi finalizado!");