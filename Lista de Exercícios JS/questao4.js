function divisorDividendo(divisor, dividendo) {
  let resultado = Math.floor(dividendo / divisor)
  let resto = dividendo % divisor
  console.log(`Resultado da divisão: ${resultado}`)  
  console.log(`O resto da divisão: ${resto}`)  
}

console.log(divisorDividendo(10, 3 ))