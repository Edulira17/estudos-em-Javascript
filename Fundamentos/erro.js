function tratarErrorELancar(erro) {
  //throw new Error('....')
  //throw 10
  //throw true 
  //throw 'message'
  throw {
    nome: erro.name,
    msg: erro.message, 
    date: new Date
  }

}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')     
  }catch(e) {
    tratarErrorELancar(e)
  } finally {
    console.log('final')
  }
} 

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)