const calcular = document.getElementById('calcular');

function imc () {
  const nome = document.getElementById('nome').value;
  const altura = +document.getElementById('altura').value;
  const peso = +document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorImc = (peso / (altura * altura)).toFixed(1);

    let classificacao = '';

    if (valorImc < 18.5) {
      classificacao = 'abaixo do peso';
    } else if (valorImc < 25) {
      classificacao = 'com peso ideal. Parabéns!';
    } else if (valorImc < 30) {
      classificacao = 'levemente acima do peso.';
    } else if (valorImc < 35) {
      classificacao = 'com obesidade grau 1.';
    } else if (valorImc < 40) {
      classificacao = 'com obesidade grau 2.';
    } else {
      classificacao =
        'obesidade grau 3. Cuidado'; /* PODERIA CRIAR UMA FUNCAO PARA DIRECIONAR A UM VIDEO SOBRE OBESIDADE.*/
    }

    resultado.textContent = `${nome} seu IMC é ${valorImc} e você está ${classificacao}`;


  }else {
      resultado.textContent = 'Preencha todos os campos!!!'
  }
}

calcular.addEventListener('click', imc)