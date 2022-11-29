let valor =  Number(prompt('quantidade'));
let aux = 0
let v1 = 0
let qtd = v1
while( valor > aux) {
  v1 = Number(prompt('digite um numero: '))  
  aux++;
  qtd = qtd + v1 / valor
 }
alert(qtd)
