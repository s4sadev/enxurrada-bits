//selecionar o header e criar um h1 como filho
const head = document.querySelector('header')
head.insertAdjacentHTML('afterbegin' , '<h1>PÃES</h1>')

//selecionar main e criar duas divs que contenham h2 e p
//frances
const antigo_main = document.querySelector('main')
antigo_main.insertAdjacentHTML('afterbegin' , '<div id = "frances"></div>')
const div_nova_frances = document.querySelector('#frances')
div_nova_frances.insertAdjacentHTML('afterbegin' , '<h2>Pão Francês</h2>')
div_nova_frances.insertAdjacentHTML('beforeend' , '<p></p>')
//forma 
antigo_main.insertAdjacentHTML('beforeend' , '<div id = "forma"></div>')
const div_nova_forma = document.querySelector('#forma')
div_nova_forma.insertAdjacentHTML('afterbegin' , '<h2>Pão de Forma</h2>')
div_nova_forma.insertAdjacentHTML('beforeend' , '<p></p>')

//texto do frances
const frances = document.querySelector('#frances  p')
const texto_frances = document.createTextNode('Um rolo é um pedaço de pão pequeno, geralmente redondo ou oblongo, servido como acompanhamento de uma refeição. Os pãezinhos podem ser servidos e comidos inteiros ou também são comumente cortados e recheados.')
frances.appendChild(texto_frances)

//texto do de forma
const forma = document.querySelector('#forma p')
const texto_forma = document.createTextNode('O pão de forma é um produto obtido a partir do cozimento da massa doce da farinha de trigo. A massa é moldada em uma forma ou molde (geralmente com aspecto de paralelepípedo reto) antes de ser levada ao forno. Há o tipo de pão de forma integral, tem este nome porque é feito com farinha de trigo integral.')
forma.appendChild(texto_forma)


