// IIFE => Immediately Invoked Function Expression

/*(function() {
  console.log('Será executado na hora!')
  console.log('Foge do escopo mais abrangente')
})() 
*/

/* 1 Forma com parâmetro
(function(value){
  const result = 1 + 2;
  console.log(`${value} ${result}`);
})('Resultado:');
*/

/* 2 Forma com parâmentros

(function(value) {
  const result = 1 + 10
  console.log(`${value} ${result}`)
}('Resultado:'))
*/
// 1 Forma sem parâmetros
(function() {
  const result = 5 + 2
  console.log(`Resultado: ${result}`)
})();


// 2 Forma sem parâmetros 
(function() {
  const result = 10 + 10
  console.log(`Resultado: ${result}`)
})();