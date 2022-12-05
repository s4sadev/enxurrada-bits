let x = prompt("Digite o primeiro numero:")
let sinal = prompt("operaçao:")
let y = prompt("Digite o segundo numero:")
let num1 = parseInt(x)
let num2 = parseInt(y)
if (sinal=== "+"){
  alert( 'O resultado da soma é ' + num1+num2)
}
else if (sinal === "-"){
  alert( 'O resultado da subtração é: ' + num1-num2)
}
else if (sinal === "*"){
  alert('O resultado da multiplicação é: ' + num1*num2)
}
else if(sinal=== "/") {
  alert('O resultado da divisão é: ' + num1/num2)
}
