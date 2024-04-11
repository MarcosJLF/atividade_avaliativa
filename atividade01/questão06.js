/* 6) Crie 2 Arrays, no primeiro você pedirá para o usuário digitar 10 números.
Faça um código para copiar para o segundo Array, apenas os números ímpares existentes
no primeiro Array.
*/ 

function arrays (){

let list = [];
let m = 0;

for(let i = 0; i < 10; i++){
     m = +prompt("Digite dez números")
    if(m % 2 != 0){
        console.log(m)
        list.push(m)
    }
}
alert(list)

}

arrays()