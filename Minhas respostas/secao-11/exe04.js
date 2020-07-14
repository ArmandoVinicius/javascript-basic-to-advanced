class Carro {
    constructor(marca, cor, gasolina) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
    }

    dirigir(km) {
        let gasosaStart = this.gasolina;
        let kmStart = km;
        while(km > 0){
            this.gasolina--;
            km -= 10;
        }
        let totGaso = gasosaStart - this.gasolina;
        console.log(`Chegamos agora de uma viagem de ${kmStart}KM, onde foram gastos ${totGaso}L de gasolina, agora seu carro possui ${this.gasolina}L de gasolina`);
    }

    abastecer(gasolinaAbastecida) {
        this.gasolina += gasolinaAbastecida;
        console.log(`O carro foi abastecido com ${gasolinaAbastecida}L de gasolina e agora possui ${this.gasolina}L`);
    }
}

let carro = new Carro('Classic', 'Prata', 10);

carro.dirigir(10);
carro.abastecer(10);
