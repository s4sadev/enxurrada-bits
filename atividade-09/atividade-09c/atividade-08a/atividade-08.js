let saldo = parseInt(prompt('Digite o valor de seu saldo:'));
let compra = parseInt(prompt('Digite o valor de sua compra:'));

function saldoAtual(saldo, compra) {
  return saldo - compra;
}

if (compra < saldo || compra === saldo) {
  alert('Operação bem sucedida' + '\n' + 'Saldo atual: ' + saldoAtual(saldo, compra));

}
else {
  alert("Operação invalida, saldo insuficiente.");
}
