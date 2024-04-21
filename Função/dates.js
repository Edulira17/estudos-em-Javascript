/* RETORNA A DATA ATUAL 
const dataAtual = new Date();
console.log(dataAtual)
*/

// RETORNA HORA E MINUTO LOCAL ATUAL.

const dataAtual = new Date();
let dataAtualLocal =
  dataAtual.getHours() +
  ":" +
  dataAtual.getMinutes() +
  ":" +
  dataAtual.getSeconds();
console.log("A hora local é", dataAtualLocal);

// OBTENDO O DIA DA SEMANA
const dataAtual2 = new Date();

console.log(dataAtual2.getDay());
console.log(dataAtual2.getMonth());
console.log(dataAtual2.getFullYear());

// Se for domingo ou janeiro retorna 0; se for segunda ou fevereiro retorna 1; e assim por diante...
