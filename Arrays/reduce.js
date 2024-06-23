// aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzi-lo a um único valor. A função de callback recebe quatro argumentos: o acumulador, o valor atual, o índice atual e o array original. É possível fornecer um valor inicial opcional para o acumulador. Caso contrário, o primeiro elemento do array é utilizado como valor inicial. É comumente usado para somar valores, concatenar strings, ou transformar arrays em objetos.
const alunos = [
    {nome: 'Joao', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: false},
]

console.log(alunos.map(a => a.nota))

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado)