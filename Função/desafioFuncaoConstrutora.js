function Pessoa(nome) {
  this.nome = nome
  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`)
  }
}
const p1 = new Pessoa('Eduardo')
p1.falar()

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = criarPessoa('LIRA')
p2.falar()