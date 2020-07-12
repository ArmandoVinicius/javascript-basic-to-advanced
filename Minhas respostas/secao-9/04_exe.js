const arr1 = [1,2,3,4,5,6];
const arr2 = ['a','b','c'];

function verificaTam(array){
    if(array.length < 5){
        console.log("Poucos elementos dentro do array");
    }else{
        console.log("Muitos elementos no array");
    }
}

verificaTam(arr1);
verificaTam(arr2);