var limite = 4;
var num;
var soma = 0;
for ( let lp = 0; lp < limite; lp++) {
  num = parseInt(prompt('Digite um numero(ate 4 digitos): '))
  soma =  soma + num / limite
  }
alert('A média dos valores é: ' + soma)

alert('Agora voce pode digitar o limite de valores de sua escolha')

var limite = parseInt(prompt('digite o limite'));
var num;
var soma = 0;
var lp = 0;
while (lp < limite) {
  num = parseInt(prompt('Digite um numero: '))
  lp++
  soma =  soma + num / limite
  }
alert('A média dos valores é: ' + soma)
