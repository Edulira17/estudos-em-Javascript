console.log(soma(3, 4)) //FUNCIONA SOMENTE COM A FUNCTION DECLARATION 


// function declaration
function soma(x, y) {
  return x + y
}

// function expression
const sub = function (x, y) {
  return x - y
}
console.log(sub(3, 5)) // SÓ PODE CHAMAR DEPOIS DE CRIAR A FUNÇAO

// named function expression -- POUCO USADA
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(3, 4))