
function boasVindas (){
    let nome = document.querySelector('#nome')
    let idade = document.querySelector('#idade') 
    let botao = document.querySelector('button')
    let div = document.querySelector('#box')

    let h1 = document.createElement('h1')
    let br = document.createElement('br')
    let  mensagem = document.createTextNode(`Bem Vindo(a) ${nome.value} \n , você tem ${idade.value} anos :)`)
    h1.appendChild(mensagem)
    div.appendChild(h1)
    h1.classList.add('titulo')
}

let Ok = document.querySelector('button')
Ok.onclick = boasVindas;

alert(mensagem_inicial)