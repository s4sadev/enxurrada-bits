let saldo = prompt('Digite o valor de seu saldo:');
let compra = prompt('Digite o valor de sua compra:');
let salatu = saldo - compra
if(compra<saldo){
  alert(`Operação bem sucedida, Saldo atual: ${salatu}`)
}
else if(compra===saldo){
  alert(`Operação bem sucedida, Saldo atual: ${salatu}`)
}
else {
  alert(`Operação invalida, saldo insuficiente.`)
}