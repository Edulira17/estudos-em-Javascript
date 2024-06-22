//Implementando meu proprio Filter:
Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

//Filter serve pra filtrar um array
const produtos = [
    {nome: 'notebook', preco: 2499, fragil:true},
    {nome: 'ipad', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.99, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false}
]



//Filtrando somente os elementos maiores que 500 reais e os elementos com status "fragil" true.
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))