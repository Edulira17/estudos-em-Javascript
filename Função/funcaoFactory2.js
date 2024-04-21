function criarProdutos(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}
console.log(criarProdutos('nutella', 9))
console.log(criarProdutos('Notebook', 1199.49 ))