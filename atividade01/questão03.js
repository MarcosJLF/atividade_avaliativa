// 3) Calcular a soma dos números de um array

function soma() {

  let numberlist = [];

  let a = +prompt('')

  for (let i = 0; i < a; i++) {
    numberlist.push(+prompt('Digite um número'))
  }
  let couter = 0;
  for (let i = 0; i < numberlist.length; i++) {
    couter += numberlist[i]
  }
  console.log(couter)

}
soma()
