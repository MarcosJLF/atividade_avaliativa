// 5) Localizar o maior valor dentro de um array de números

function array() {

  let numberarray = +prompt('Quantos números deseja adicionar à array?');
  
  let arrays = [];
  
  for (let i = 0; i < numberarray; i++) {
  
    arrays.push(+prompt('Digite um número ' + (i + 1) + `/${numberarray}`))
    
  }
  console.log(arrays)
  
  let maior = arrays[0]
  
  for (let i = 0; i < arrays.length; i++) {
  
    if (arrays[i] > maior) {
    
      maior = arrays[i]
      
    }
  }
  console.log(maior)
  
  alert('O maior número é: '+maior)
  
}
array()

//Eu apenas modifiquei o código para perguntar ao usuário quantos números ele deseja adicionar em um array, 
//e adicionei um contador. A função não era necessária; eu poderia removê-la, mas preferi não mudar muito meu código, 
//apenas adicionar novas funcionalidades para torná-lo mais interativo.
    
