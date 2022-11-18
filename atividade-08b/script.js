let x = prompt("Digite o primeiro numero:")
let sinal = prompt("operaçao:")
let y = prompt("Digite o segundo numero:")
let num1 = parseInt(x)
let num2 = parseInt(y)
if (sinal=== "+"){
  alert(num1+num2)
}
else if (sinal === "-"){
  alert(num1-num2)
}
else if (sinal === "*"){
  alert(num1*num2)
}
else if(sinal=== "/") {
  alert(num1/num2)
}