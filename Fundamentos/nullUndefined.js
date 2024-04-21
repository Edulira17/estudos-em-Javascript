let valor //Não inicializada
console.log(valor)

valor = null 
console.log(valor) // ausência de valor 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Boa prática deixar a linguagem definir o undefined
console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço 