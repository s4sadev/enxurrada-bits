var limite = 4;
var num;
var soma = 0;
for ( let lp = 0; lp < limite; lp++) {
  num = Number(prompt('Digite um numero(ate 4 digitos): '))
  soma =  soma + num / limite
  }
alert('A média dos valores é: ' + soma)

alert('Agora voce pode digitar o limite de valores de sua escolha')

var limite = parseInt(prompt('digite o limite'));
var soma = 0;
var num ;
var repete = 0;
while ( repete < limite) {
  num = parseInt(prompt('Digite um numero: '))
  repete++
  soma =  soma + num
  }
alert('A soma dos valores é: ' + soma + '\n' + 'A media dos valores é: ' + (soma/limite))
