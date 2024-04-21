console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
//REVERTENDO UMA STRING
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}
console.log('Eduardo Lira da Cunha Neto'.reverse())

//ACESSANDO O PRIMEIRO ELEMENTO DE UM ARRAY = POSSIVEL POR ESSE METODO;
Array.prototype.first = function() {
  return this[0]
}
console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//EXEMPLO DE UMA COISA QUE NAO PODE SE FAZER JAMAIS = JAMAIS SUBSTITUIR COMPORTAMENTOS 
String.prototype.toString = function() {
  return 'Lascou Tudo'
}
console.log('Escola Cod3r'.reverse())