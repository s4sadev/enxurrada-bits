let x = parseInt(prompt("Digite o primeiro numero:"))
let sinal = prompt("operaçao:")
let y = parseInt(prompt("Digite o segundo numero:"))

function soma(x, y) {
  return x + y;

}

function subtrai(x, y) {
  return x - y;
}

function multiplica(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

if (sinal=== "+"){
  alert('O resultado da soma é ' + soma(x, y));
}
else if (sinal === "-"){
  alert('O resultado da subtração é: ' + subtrai(x, y));
}
else if (sinal === "*"){
  alert('O resultado da multiplicação é: ' + multiplica(x, y));
}
else if(sinal=== "/") {
  alert('O resultado da divisão é: ' + divide(x, y));
}
