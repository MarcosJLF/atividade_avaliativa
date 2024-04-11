// 5) Localizar o maior valor dentro de um array de números



function array (){

let number = [1,10,3,4,5]
let maior = number[0]


for(let i = 0; i < number.length; i++){
    if(number[i] > maior ){
        maior = number[i]
    }
    
}
console.log(maior)

}


array()