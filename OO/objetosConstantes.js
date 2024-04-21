// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'davi'
console.log(pessoa)

// pessoa -> 456 -> {...} 
//pessoa = {nome: 'Ana'} - ERROR - não pode atribuir um novo objeto.

//congelando o objeto 'pessoa' - NÃO PODE SER ALTERADO.
Object.freeze(pessoa)
pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome)
console.log(pessoa)

//criando um Objeto para nunca ser mudado com o método 'freeze'.

const pessoa2 = Object.freeze({nome: 'Pedro'})
pessoa2.nome = 'Mariana'
console.log(pessoa2)