function decrementUm(num){
    while(num>0){
        if(num % 2 == 0){
            console.log(num);
        }
        num -= 1;
    }
}

decrementUm(10);