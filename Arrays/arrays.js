console.log(typeof Array, typeof new Array, typeof [])

//Criando um array pelo operador "new"
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Estrutura indexada = os seus elementos podem ser acessados sequencialmente utilizando índices.
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])//quando o indice nao existe no array, por padrão retorna "undefined"

//Formas de atribuir um novo valor ao indice do array

aprovados[3] = 'Paulo' //adicionando um elemento a partir  de um indice pode-se se substituir um elemento atraves dessa forma

aprovados.push('Abia') //adicionando um elemento pelo metodo sort()

console.log(aprovados.length)

//é possivel adicionar um valor em um indice que nao existe no array, porem os valores que estao no meio entre 5 e 9 sao definidos como "undefined"
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

//função de ordenação do array
console.log(aprovados)
aprovados.sort()
console.log(aprovados)

//excluindo o elemento de um array
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//O método "splice()" altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Rafa', 'Joana')
console.log(aprovados)
