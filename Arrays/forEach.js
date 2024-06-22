/*Formas de percorrer um array:*/
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/*
PERCORRENDO OS NOMES E OS INDICES DO ARRAY DE NOMES: 
obs: o indice é sempre passado como segundo parametro!
*/
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

/*RETORNANDO SOMENTE OS NOMES */
aprovados.forEach(nome => console.log(nome))

/*ARMAZENANDO UMA FUNÇÃO EM UMA VARIAVEL E PASSANDO ELA POR PARAMETRO NO FOReach */
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)