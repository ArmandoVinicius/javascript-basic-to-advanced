class EnderecoCliente {
    constructor(rua, bairro, cidade, Estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.Estado = Estado;
        this.updateEndereco(rua, bairro, cidade, Estado);
    }

    alteraRua(newRua) {
        if(newRua.length > 0){
            this.rua = newRua;
        }else{
            console.log('Impossível alterar para a rua desejada, por favor, verifique o que digitou e tente novamente')
        }
        this.updateEndereco(newRua, this.bairro, this.cidade, this.Estado);
    }

    alteraBairro(newBairro) {
        if(newBairro.length > 0){
            this.bairro = newBairro;
        }else{
            console.log('Impossível alterar para o bairro desejado, por favor, verifique o que digitou e tente novamente')
        }
        this.updateEndereco(this.rua, newBairro, this.cidade, this.Estado);
    }
    
    alteraCidade(newCidade) {
        if(newCidade.length > 0){
            this.cidade = newCidade;
        }else{
            console.log('Impossível alterar para a cidade desejada, por favor, verifique o que digitou e tente novamente')
        }
        this.updateEndereco(this.rua, this.bairro, newCidade, this.Estado);
    }
    
    alteraEstado(newEstado) {
        if(newEstado.length > 0){
            this.Estado = newEstado;
        }else{
            console.log('Impossível alterar para o Estado desejado, por favor, verifique o que digitou e tente novamente')
        }
        this.updateEndereco(this.rua, this.bairro, this.cidade, newEstado);
    }

    updateEndereco(rua, bairro, cidade, Estado) {
        this.endereco = `rua: ${rua}, bairro: ${bairro}, cidade: ${cidade}, Estado: ${Estado}`;
    }
}

let endereco = new EnderecoCliente('350', 'São Cristóvão', 'Fortaleza', 'Ceará');
console.log(endereco);
console.log('cabou');
endereco.alteraRua('301');
console.log(endereco);
console.log('cabou');
endereco.alteraBairro('Messejana');
console.log(endereco);
console.log('cabou');
endereco.alteraCidade('Irauçuba');
console.log(endereco);
console.log('cabou');
endereco.alteraEstado('Piauí');
console.log(endereco);
console.log('cabou');