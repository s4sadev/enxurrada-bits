//pegar o primeiro e o sagundo numero
let num1 =  document.querySelector("#num1")
let num2 = document.querySelector("#num2")

//pegar os botoes 
let btn_soma = document.querySelector('#soma')
let btn_subtrai = document.querySelector('#subtrai')
let btn_multiplica = document.querySelector('#multiplica')
let btn_divide = document.querySelector('#divide')

// definir as funçoes

function Soma(num1 , num2) {
    let resultado_soma = parseInt(num1.value) + parseInt(num2.value)
    let h2 = document.createElement('h2')
    let text = document.createTextNode(`${num1.value} + ${num2.value} = ${resultado_soma}`)
    
    h2.appendChild(text)
    document.body.appendChild(h2)
}

function Subtrai(num1 , num2) {
    let resultado_subtrai = parseInt(num1.value) - parseInt(num2.value)
    let h2 = document.createElement('h2')
    let text = document.createTextNode(`${num1.value} - ${num2.value} = ${resultado_subtrai}`)
    
    h2.appendChild(text)
    document.body.appendChild(h2)
}


function Multiplica(num1 , num2) {
    let resultado_multiplica = parseInt(num1.value) * parseInt(num2.value)
    let h2 = document.createElement('h2')
    let text = document.createTextNode(`${num1.value} x ${num2.value} = ${resultado_multiplica}`)
    
    h2.appendChild(text)
    document.body.appendChild(h2)
}


function Divide(num1 , num2) {
    let resultado_divide = parseInt(num1.value) / parseInt(num2.value)
    let h2 = document.createElement('h2')
    let text = document.createTextNode(`${num1.value} / ${num2.value} = ${resultado_divide}`)
    
    h2.appendChild(text)
    document.body.appendChild(h2)
}
