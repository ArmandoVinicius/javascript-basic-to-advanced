function detectaTipo(param) {
    tipo = typeof param;
    switch (tipo) {
        case "number":
            console.log('Você digitou um número');
            break;
        case "string":
            console.log('Você digitou um texto(string)');
            break;
        case "boolean":
            console.log('Você digitou true ou false');
            break;
        default:
            console.log('Não foi possivel identificar o tipo de dado que você inseriu');
            break;
    } 
}

detectaTipo(NaN);