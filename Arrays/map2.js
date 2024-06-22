const carrinho = [
    '{"nome": "Borracha", "preço": 3.45}',
    '{"nome": "Caderno", "preço": 13.90}',
    '{"nome": "Kit de lapis", "preço": 41.22}',
    '{"nome": "Caneta", "preço": 7.50}'
]
//Retornar um array com apenas os preços:
const paraObjeto = json => JSON.parse(json)
const precos = produto => produto.precos

const resultado = carrinho.map(paraObjeto)//.map(precos)
console.log(resultado) 