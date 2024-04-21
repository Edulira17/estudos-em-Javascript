// EXEMPLO: Recebendo como parâmetro uma data de nascimento vinda de um formulário HTML.

function validaDataNascimento(input) {
  const validaDataNascimentoInformada = new Date(input.value);
}

//Recebendo data de nascimento e somando a ela 18 anos (útil para validações de formulários)

function maiorQue18(validaDataNascimentoInformada) {
  const dataAtual = new Date();

  const dataNascimentoMais18 = new Date(
    validaDataNascimentoInformada.getUTCFullYear() + 18,
    validaDataNascimentoInformada.getUTCMonth(),
    validaDataNascimentoInformada.getUTCDate()
  );

  return dataNascimentoMais18 <= dataAtual;
  //caso true, pessoa maior de idade
}

if (maiorQue18(dataRecebida)) {
  console.log("Idade permitida para cadastramento (usuário maior de idade)");
} else {
  console.log(
    "Idade não permitida para cadastramento (usuário menor de 18 anos) "
  );
}
