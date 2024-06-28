const alunos = [
    {nome: 'joao', nota: 7.9},
    {nome: 'maria', nota: 9.2},
]

//IMPERATIVO : Mais detalhista 
let total1 = 0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//DECLARATIVO : Mais direto ao ponto
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)