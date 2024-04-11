/*1) Uma sorveteria possui um sistema de self-service de sorvetes no qual o cliente podemontar seu sorvete com até 3 bolas (sabores).
Criar um programa que simule esse sistema:
1- Adicionar sabor
2- Remover sabor
3- Visualizar sorvete
4- Finalizar pedido
*/



function sorveteria (){

let opt = -4;
let menu = ("Menu\n 1- Adicionar sabor\n2- Remover sabor\n3- Visualizar sorvete\n4- Finalizar pedido ")
let sorvete = [];
let remover = "";

    while( (opt = +prompt(menu)) != 4 ){
         switch(opt){
            
            case 1:
           let sorvetes = prompt("Escolha o sabor");
           sorvete.push(sorvetes);
            break;
            case 2: 
            let remover = prompt(`Qual sabor você deseja remover:\n`);
            sorvete.splice(remover, 1);
            break;
            case 3: 
            alert(`Você escolheu ${sorvete}`)
            break;
            default:
                alert("Foi um prazer ter você aqui")
                
         }
    } 
    
}

sorveteria()
