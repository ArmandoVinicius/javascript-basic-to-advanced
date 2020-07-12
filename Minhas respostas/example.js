const numeros = [0, 1, 2, 3, 4, 5];
/* 
console.log("Método slice");
//Retorna um array a partir do 'fatiamento' de outro.
//É possível selecionar o começo e o fim, caso não especifique o fim, ele fatia até o final do array

console.log(numeros.slice(2,3));
console.log(numeros.slice(2));
 */
/* 
console.log("Método forEach");
//O método forEach serve para percorrer determinado array e faz uma ação para cada índice

numeros.forEach(num => {
    console.log(num);
});
 */
/* const carros = ["BMW", "Fiat", "vw", "Uno"];

console.log("Método includes");
// O método 'includes' serve para verificar se existe determinado valor dentro de um array. Retorna true ou false;

console.log(carros.includes("Uno'")); */
/* 
const nums = [0,1,2,3,4,5];

console.log(nums.reverse()); */

/* let frase = "O rato roeu a roupa do rei de roma";

let separation = frase.split("r");
console.log(separation);
frase = separation.join('r');
console.log(frase); */

let nomes = ['Matheus', 'João', 'Armando'];

const [nome1, nome2, nome3] = nomes;
const [nomeA, ...outrosNomes] = nomes;

console.log(nome1);
console.log(nome2);
console.log(nomeA);
console.log(outrosNomes);

const [nome1A, another] = outrosNomes;
console.log(nome1A);
console.log(another);