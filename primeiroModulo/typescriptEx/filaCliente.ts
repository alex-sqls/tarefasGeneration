import ler = require("readline-sync")
import { Queue } from "./queueMetodos"

const fila = new Queue<string>()

let continua: string = '';
let valorOpcao: any;

    console.log("### 1 Adicionar cliente na fila ############");
    console.log("### 2 Listar todos os clientes ########");
    console.log("### 3 retirar clientes da fila #########");
    console.log("### Digite 0 para sair #########");

do {
    let opcao = ler.questionInt("Entre com a opcao desejada: ")
    
    switch (opcao) {
        case 1:
            fila.enqueue(ler.question("Nome: "))
            console.log("cliente adicionado")
            break;
        case 2:
            fila.printQueue()
            break;
        case 3:
            fila.dequeue()
            break;
        default:
            break;
    }
    continua = ler.question("Digite s para continuar: ").toLowerCase()
} while (continua === 's');