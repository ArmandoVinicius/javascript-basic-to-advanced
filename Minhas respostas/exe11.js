const idade = 19;
const cnh = true;
if(idade >= 18 && cnh) console.log('Você pode dirigir');
else if(idade >= 18 && cnh == false) console.log('Você não pode dirigir, pois não tem CNH');
else console.log('Você não pode dirigir, pois não é maior de idade e nem tem CNH');