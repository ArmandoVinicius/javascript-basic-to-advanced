class Conta {
    constructor(saldoCorrente, saldoPoupanca, jurosPoupanca) {
        this.saldoCorrente = saldoCorrente;
        this.saldoPoupanca = saldoPoupanca;
        this.juros = jurosPoupanca;
    }
    
    deposito(quantia) {
        this.saldoCorrente += quantia;
    }

    saque(quantia) {
        this.saldoCorrente -= quantia;
    }

    transferenciaCorrente(quantia) {
        this.saldoCorrente -= quantia;
        this.saldoPoupanca += quantia;
    }

    transferenciaPoupanca(quantia) {
        this.saldoCorrente += quantia;
        this.saldoPoupanca -= quantia;
    }

    jurosParaPoupanca() {
        let juros = (this.saldoPoupanca * this.juros)/100;
        this.saldoPoupanca += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCorrente, saldoPoupanca, juros) {
        super(saldoCorrente, saldoPoupanca, juros*2);
    }
}

let conta1 = new Conta(1000, 5000, 1);
console.log(conta1);
conta1.saque(500);
console.log(conta1);
conta1.deposito(5000);
console.log(conta1);
conta1.transferenciaCorrente(3000);
console.log('transferido');
console.log(conta1);
conta1.jurosParaPoupanca();
console.log('Juros para poupanca');
console.log(conta1);

let conta2 = new ContaEspecial(10000, 5000, 1);

console.log(conta2);
conta2.saque(5000);
console.log(conta2);
conta2.jurosParaPoupanca();
console.log('Juros');
console.log(conta2);