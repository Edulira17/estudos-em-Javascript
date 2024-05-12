const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
/*Metodo que remove o ultimo elemento do array*/
pilotos.pop() 
console.log(pilotos)

/*adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.*/
pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //REMOVE O PRIMEIRO ELEMENTO DO ARRAY
console.log(pilotos)

pilotos.unshift('Hamilton')//ADICIONA UM ELEMENTO NO COMEÇO DO ARRAY
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover:
pilotos.splice(3, 1)
console.log(pilotos)

/*
Retorna um novo array
slice = pedaço em ingles
retorna metade de um array
*/ 
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
