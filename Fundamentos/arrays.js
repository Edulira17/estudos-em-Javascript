const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)//Retorna quantos elementos eu tenho no Array

valores.push({id:3}, false, null, 'teste')//Posso passar multiplos tipos dentro de um array, como: objeto, um valor boolean etc.
console.log(valores)

console.log(valores.pop())//Remove o ultimo elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)//identifica qual tipo do Array
