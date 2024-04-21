function criarNovoArray(arrayAtual, num) {
  let novoArray = [];
  for(let i = 0; i < arrayAtual.length; i++) {
    if(arrayAtual[i] < num) {
      novoArray.push(arrayAtual[i])
    }
  }
  return novoArray
}

let arrayAtual = [1,2,3,4,5,6,7,8,9,10];
let num = 7;

console.log(`Este é o array resultante: [${criarNovoArray(arrayAtual, num)}]`)