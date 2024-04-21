// CADEIA DE PROTÓTIPOS (prototype chain)
// QUANDO NÃO SE ACHA O OBJETO QUE CONTEM TAL ATTR, ELE BUSCA NO OBJECT.PROTOTYPE
Object.prototype.attr0 = '0'
const avo = {attr1: 'A'}
//acessando prototipo de pai = na hierarquia seria o avo com 'attr1'
const pai = {__proto__: avo, attr2: 'B', attr3: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
      velAtual: 0,
      velMax: 200,
      acelerarMais(delta) {
            if(this.velAtual + delta <= this.velMax){ 
                  this.velAtual += delta
            }else {
                  this.velAtual = this.velMax
            }
      },
      status() {
            return `${this.velAtual}Km/h de ${this.velMax}Km/h.`
      }
}

const ferrari = {
      modelo: 'F40',
      velMax: 324 //shadowing
}

const volvo = {
      modelo: 'V40',
      status() {
           return `${this.modelo}: ${super.status()}` //SOMBREANDO A FUNÇÃO 'STATUS'
      }
}
//NESSE MOMENTO SE ESTABELECEU UMA RELAÇÃO ENTRE OBJ FERRARI E OBJ CARRO
//NO CASO O PROTÓTIPO DE FERRARI SERIA 'CARRO'
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(120)
console.log(ferrari.status())
