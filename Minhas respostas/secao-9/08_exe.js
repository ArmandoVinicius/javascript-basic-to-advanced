const calculadora = {
    somar(num, num1) {
        return num + num1;
    },

    subtrair(num, num1) {
        return num - num1;
    },

    multi(num, num1) {
        return num * num1;
    },

    divi(num, num1) {
        return num/num1;
    }
}

console.log(calculadora.somar(1,2)); // 3
console.log(calculadora.subtrair(3,1)); // 2
console.log(calculadora.multi(2,4)); // 8 
console.log(calculadora.divi(8,2)); // 4