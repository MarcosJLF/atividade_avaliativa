/*2) Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba-
o.
Modifique os elementos do array de modo que a sequência de números fique do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1
*/

function array (){ 

    let number = 0;
    let mm = [ ];
   
   for(let i = 0; i < 3; i++){  
    mm.push  (+prompt("Digite um números"))
    }
   
    mm.reverse()
   
    alert(mm)
   
   }
   
   array()
