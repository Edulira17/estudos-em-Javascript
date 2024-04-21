function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max-min) + min     // ** RESULTADO É UM GERADOR DE NUMEROS ALEATORIOS ENTRE 50 E 40
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 995}))
console.log(rand({}))
