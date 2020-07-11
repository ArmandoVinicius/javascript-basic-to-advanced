function menosDez(texto){
    if(texto.length > 10){
        return "Texto muito longo";
    }else{
        return "Texto dentro do padrão";
    }
}

console.log(menosDez("Olá, meu nome é João"));
console.log(menosDez("Eita trem"));
console.log(menosDez("Bão"));