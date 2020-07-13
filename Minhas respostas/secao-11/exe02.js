class CarrinhoCompra {
    constructor(itens = [], quantTot = 0, valTot = 0) {
        this.itens = itens;
        this.quantTot = quantTot;
        this.valTot = valTot;
    }

    adicionaItem(itemName, quantItem, valItem) {
        let timesToAdd = quantItem;
        while(timesToAdd > 0){
            this.itens.push(itemName.toLowerCase());
            timesToAdd -= 1;
        }; // Estou adicionando o nome do item no array a quantidade de vezes necessária
        this.quantTot += quantItem; // Adicionando a quantidade de itens na quantidade total
        this.valTot += (quantItem * valItem); // Adicionando o valor desse item no valor total
    }

    removeItem(itemName, quantItem, valItem) {
        let timesToRemove = quantItem;
        if(this.itens.includes(itemName.toLowerCase()) && quantItem <= this.quantTot){
            while(timesToRemove > 0){
                let indice = this.itens.lastIndexOf(itemName.toLowerCase());
                this.itens.splice(indice);
                this.quantTot -= 1;
                this.valTot -= valItem;
                timesToRemove--;
            }
        }else{
            console.log('Impossível remover a quantidade ou item desejado');
        }
    }
}

let compra = new CarrinhoCompra();

compra.adicionaItem('noz', 2, 5);
compra.adicionaItem('maçã', 4, 2.5);
compra.adicionaItem('arroz', 1, 3);

console.log('Adicionando itens...');
console.log(compra.itens, compra.quantTot, compra.valTot); // [noz, noz, maçã * 4, arroz], 7, 23
console.log('Terminou de adicionar.');

compra.removeItem('noz', 1, 5);
compra.removeItem('maçã', 4, 2.5);

console.log('Removendo itens...');
console.log(compra.itens, compra.quantTot, compra.valTot); // [noz, arroz], 2, 8
console.log('Terminou de remover.'); 