const pai = {nome: 'Pedro', corCabelo:'preto'}
/*
  Como o método 'Object.create' define que o protótipo é o OBJETO que passamos por parâmetro. O output vai ser o atributo do obj pai "corCabelo".
*/ 
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
  nome:{value: 'Bia', writable: false, enumerable: true} //writable = o valor nao vai aceitar ser mudado. / enumerable = o valor pode ser listado

})
console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

/*
METODO 'OBJECT.KEYS()' = retorna um array de propriedades enumeraveis de um determinado objeto.
*/ 
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
  filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}
