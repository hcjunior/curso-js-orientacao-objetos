import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233309);

const cliente2 = new Cliente("Alice",88822233309);

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);

contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

contaCorrenteRicardo.transferir(200,conta2)

console.log(conta2);
