const primo = 3;
let count = 0;
for (let i = 0; i <= primo; i++){
    if (primo >= 1 && primo % i == 0) count++;
    else continue;
}
if(count == 2) console.log(`${primo} é primo`);
else console.log(`${primo} não é primo`);
