let dobro = function(a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro =  a => 2 * a //return implícito
console.log(dobro(Math.PI))

let ola = function() {
  return 'olá'
}

ola = () => 'Olá'
ola = _ => 'Oláaa' //possui um parâmetro 
console.log(ola())