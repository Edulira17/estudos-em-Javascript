const escola = "COD3R"
console.log(escola.charAt(4)) //Me retorna a letra que está no índice (4) no caso = "r"

console.log(escola.charCodeAt(3))//Esse metódo retorna o valor do numero da tabela unicode = 51 codigo HTML.

console.log(escola.indexOf('3'))//Retorna o índice "3" = 3

console.log(escola.substring(1))//Imprime no console somente os indices a frente do indice "1" = od3r
console.log(escola.substring(0,3))//Imprime a partir do indice "0" ate 3, mas nao imprime o indice "3"

console.log(`Escola `.concat(escola) .concat("!"))//Cocatenando uma string com uma variavel
console.log(`Escola `+(escola) +("!"))//Cocatenando uma string com uma variavel

console.log(escola.replace(3, 'e'))//Substitui o numero 3 pela letra "e"

console.log('Ana, Maria, Pedro'.split(','))//Metodo para converter uma string em Array