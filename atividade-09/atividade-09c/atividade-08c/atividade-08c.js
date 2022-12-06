var limite = Number(prompt('digite o limite'));
var soma = 0;
var repete = 0;


function media(soma, limite) {
  while (repete < limite) {
  let num = Number(prompt('Digite um numero: '))
  repete++
  soma = soma + num
  }

  return soma / limite
}

alert("A media dos valores é:" + media(soma,limite))
