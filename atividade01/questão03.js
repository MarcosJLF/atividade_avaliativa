// 3) Calcular a soma dos números de um array

function soma() {
  let numberlist = [];
  let a = +prompt('Digite a quantidade de número que será somado:')
  for (let i = 0; i < a; i++) {
    numberlist.push(+prompt('Digite um número '+ (i + 1)+ `/${a}`))
  }
  let couter = 0;
  for (let i = 0; i < numberlist.length; i++) {
    couter += numberlist[i]
  }
  console.log(numberlist)
  console.log(couter) 
}
soma()

/*O que foi alterado:
Adicionei um loop que pergunta quantos números ele deseja adicionar a uma array, 
e depois soma essa array. O código já estava pronto; apenas adicionei essa nova funcionalidade, 
pois ele pegava alguns números já definidos e os somava.
 */
