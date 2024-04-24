/*4) Peça ao usuário para digitar os nomes de 5 alunos e suas notas na prova de
Matemática. Calcular a média de todas as notas acima de 5,0.
*/

function grades() {

  let m = 0;
  let grades = 0;
  let q = +prompt('Digite o número de notas')
  let numberlist = []
  let counter = 0;
  let nome = prompt('Digite o nome do aluno')

  for (let i = 0; i < q; i++) {
    grades = +prompt('Digite a grade')
    numberlist[i] = grades

    if (numberlist[i] > 5) {
      counter += numberlist[i]
      m = counter / q
    }

  }
  alert(`Média ${m}\nAluno ${nome}`)
}
grades()
