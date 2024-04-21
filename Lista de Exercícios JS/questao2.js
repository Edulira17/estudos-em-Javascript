function classificandoTriangulos(lado1, lado2, lado3) {
  if(lado1 == lado2 && lado2 == lado3) {
    return 'Equilátero'
  }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    return 'Isósceles'
  }else {
    return 'Escaleno'
  }
}

console.log(classificandoTriangulos(3, 3, 3))
console.log(classificandoTriangulos(3, 6, 8))
console.log(classificandoTriangulos(3, 3, 7))