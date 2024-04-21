//FUNCOES PARA ACESSAR OS VALORES DE UM OBJETO
const pessoa = {
  nome: "Rebeca",
  idade: 2,
  peso: 13,
};
// ACESSANDO AS CHAVES: nome, idade e peso.
console.log(Object.keys(pessoa));

//ACESSANDO O VALOR DAS CHAVES: Rebeca, 2, 13.
console.log(Object.values(pessoa));

// ACESSANDO AS CHAVES E O VALOR DELAS = retorna um array
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

//DEFINE A PROPRIEDADE DE UM OBJETO
Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: '01/01/2019',
});
/*A variável foi definida para não ser reescrita, por isso não se pode atribuir a ela outro valor*/
pessoa.dataNascimento = '01/01/2017';

console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa))

//Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}

//ATRIBUI AO OBJETO DO 1º PARÂMETRO OS DADOS DO 2° PARÂMETRO E DO 3°.
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)