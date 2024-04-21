function jurosSimples(capitalInicial, taxaJuros, tempo) {
  let juros = capitalInicial * taxaJuros * tempo;
  let montante = capitalInicial + juros;
  
  return montante;
}

console.log("Montante (Juros Simples):", jurosSimples(1000, 0.05, 2))

function jurosComposto( capitalInicial, taxaJuros, tempo) {
  let montante = capitalInicial * Math.pow((1 + taxaJuros), tempo);

  return montante.toFixed(2);
}

console.log("Montante (Juros Composto):", jurosComposto(1000, 0.1, 2))