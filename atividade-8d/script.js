var num1 = parseInt(prompt('Digite o primeiro número, de forma que este numero seja menor:'))
var num2 = parseInt(prompt('Digite o segundo número: '))
var soma = 0

if (num1 > num2) {
  alert("nao foi possivel, reinicie a pagina e tente de novo")
}


for (num1; num1 <= num2; ++num1) {
  if (num1 % 2 == 1) {
    soma += num1
  }

}
alert('A soma de todos os numeros impares dentro deste intervalo é: ' + soma)
