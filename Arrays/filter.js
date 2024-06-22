//Filter serve pra filtrar um array
const produtos = [
    {nome: 'notebook', preco: 2499, fragil:true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]

//Se o retorno for falso: todos os elemento são filtrados. Porem se for true nao filtra nenhum elemento. Pode-se usar uma logica para filtrar somente o que eu desejo.
console.log(produtos.filter(function(p){
    return p.preco > 2500
}))

//Filtrando somente os elementos maiores que 500 reais e os elementos com status "fragil" true.
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))