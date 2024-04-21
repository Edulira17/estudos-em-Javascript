//par nome/ valor
const saudacao = 'Opa' //CONTEXTO LÉXICO 1 

function exec(){
    const saudacao = 'Falaaa'// contexto léxico 2
    return saudacao
}

//OBJETOS SÃO GRUPOS ANINHADOS DE PARES NOME/VALOR
const cliente = {
    nome: 'Paulo',
    idade: 32,
    peso:90,
    endereco: {
         logradouro: 'Rua Muito Legal',
         numero: 123
    }
}
console.log(saudacao)
console.log(exec()) 
console.log(cliente)
