function calculadora() {
  const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão Interira (%)\n 6 - Potenciação (**)' ));
  
  let n1 = Number(prompt('Insira o primeiro valor:'));
  let n2 = Number(prompt('Insira o segundo valor:'));
  let resultado;

  function soma() {
  resultado = n1 + n2;
  alert(`${n1} + ${n2} = ${resultado}`);
  novaOperacao();
}
function subtracao() {
  resultado = n1 - n2;
  alert(`${n1} - ${n2} = ${resultado}`);
  novaOperacao();
}
function multiplicacao() {
  resultado = n1 * n2;
  alert(`${n1} * ${n2} = ${resultado}`);
  novaOperacao();
}
function divisaoReal() {
  resultado = n1 / n2;
  alert(`${n1} / ${n2} = ${resultado}`);
  novaOperacao();
}
function divisaoIntera() {
  resultado = n1 % n2;
  alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
  novaOperacao();
}
function Potenciacao() {
  resultado = n1 ** n2;
  alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
  novaOperacao();
}

function novaOperacao() {
  let opcao = prompt('Deseja fazer uma nova operação?\n 1 - Sim\n 2 - Não');

  if (opcao == 1 ) {
      calculadora();

  } else if (opcao == 2) {
      alert('Até mais!')
  } else {
     alert('Digite uma opção valida!')
     novaOperacao();
  }
}

  if (operacao == 1) {
    soma();
  } else if (operacao == 2){
    subtracao();
  } else if (operacao == 3) {
    Multiplicacao();
  } else if (operacao == 4) {
    divisaoReal();
  } else if (operacao == 5) {
    divisaoIntera();
  } else if (operacao == 6) {
    Potenciacao();
  }
}

calculadora();