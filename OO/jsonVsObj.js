const obj = {a: 1, b: 2, c: 3, soma(){return a + b + c }}
console.log(JSON.stringify(obj)) 

//console.log(JSON.parse("{a:1, b:2, c:3}"))
/*
  Qualquer texto ou qualquer atributo do JSON tem que ser delimitado por aspas duplas 
*/ 
console.log(JSON.parse('{"a": 1, "b": 2, "c":3}'))