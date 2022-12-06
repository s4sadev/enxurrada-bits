var nome = prompt('Digite o seu nome:')
var nasc = prompt('Digite o seu ano de nascimento:')
var ano = 2022;
function nomeIdade(nome, nasc, ano) {
  var idade = ano - nasc
  return ` Olá, ${nome} voce tem ${idade} anos`
}

alert(nomeIdade(nome, nasc, ano))
