class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let contaArmando = new Conta(200);

console.log(contaArmando.saldo); //200
console.log("Transição foda");

contaArmando.deposito(150); //350
console.log(contaArmando.saldo);
console.log("Transição foda");

contaArmando.saque(50); //300
console.log(contaArmando.saldo);
console.log("Transição foda");
