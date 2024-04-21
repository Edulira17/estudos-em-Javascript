class Avo {
  constructor(sobrenome){
    this.sobrenome = sobrenome
  }
}
// ESSA É UMA FORMA DE DECLARAR QUE ESSA CLASSE/FUNÇÃO TEM UMA OUTRA CLASSE COMO PROTOTIPO 
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
      super(sobrenome)
      this.profissao = profissao
    }
}

class Filho extends Pai {
  constructor(){
    super('Silva')
  }
}

const filho = new Filho 