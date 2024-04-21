function formatarValor(valor) {
  let valorArrendondado = Math.round(valor * 100) / 100;
  let valorFormatado = valorArrendondado.toFixed(2);
  
  valorFormatado = valorFormatado.replace('.', ',')

  valorFormatado = `R$${valorFormatado}`
  
  return valorFormatado;
}

let valorOriginal = 0.30000000000000004;
let valorFormatado = formatarValor(valorOriginal)
console.log(valorFormatado)