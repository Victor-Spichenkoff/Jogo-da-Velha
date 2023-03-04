const e1 = document.querySelector('#i1')
const e2 = document.querySelector('#i2')
const e3 = document.querySelector('#i3')
const e4 = document.querySelector('#i4')
const e5 = document.querySelector('#i5')
const e6 = document.querySelector('#i6')
const e7 = document.querySelector('#i7')
const e8 = document.querySelector('#i8')
const e9 = document.querySelector('#i9')

const turno = document.querySelector("#vez")
const infos = document.querySelector('footer')

let jogadas = 0
const espacos = [e1, e1, e2, e3, e4, e5, e6, e7, e8, e9]
let preenchidos = {i1:'', i2:'', i3:'', i4:'', i5:'', i6:'', i7:'', i8:'', i9:''}



espacos.forEach(espaco => {
    espaco.onclick = function (event) {
        if (espaco.src == 'http://127.0.0.1:5500/img/fundo.webp') {
            if (jogadas % 2 == 0) {
                event.target.src = 'img/Red_X.svg.png'
                jogadas++
                turno.innerHTML = 'Vez de <o>O</o>'
                anotar(espaco.id, 'x')

                if (verificarGanhador('x')) {
                    ganhouX()
                }
            } else {
                event.target.src = 'img/circulo-azul-diabetes.webp'
                espaco.style.width = '117px'
                espaco.style.height = '117px'
                jogadas++
                turno.innerHTML = 'Vez de <x>X</x>'
                anotar(espaco.id, 'o')

                if (verificarGanhador('o')) {
                    ganhouO()
                }
            }
        }
    }
})


function anotar (idd, tipo) {
    //recebe o id(e1, e2...)
    //recebe o tipo 'x' ou 'o'
    preenchidos[idd] = tipo
    console.log(preenchidos)
}


function verificarGanhador (tipo) {
    if (preenchidos.i1 === tipo && preenchidos.i5 === tipo && preenchidos.i9 === tipo) {
        return true
    } else if (preenchidos.i3 === tipo && preenchidos.i5 === tipo && preenchidos.i7 === tipo) {
        return true
    } else if (preenchidos.i7 === tipo && preenchidos.i4 === tipo && preenchidos.i1 === tipo) {
        return true
    } else if (preenchidos.i2 === tipo && preenchidos.i5 === tipo && preenchidos.i8 === tipo) {
        return true
    } else if (preenchidos.i3 === tipo && preenchidos.i6 === tipo && preenchidos.i9 === tipo) {
        return true
    } else if (preenchidos.i1 === tipo && preenchidos.i2 === tipo && preenchidos.i3 === tipo) {
        return true
    } else if (preenchidos.i4 === tipo && preenchidos.i5 === tipo && preenchidos.i6 === tipo) {
        return true
    } else if (preenchidos.i7 === tipo && preenchidos.i8 === tipo && preenchidos.i9 === tipo) {
        return true
    } else if (preenchidos.i1 && preenchidos.i2 && preenchidos.i3 && preenchidos.i4 && preenchidos.i5 && preenchidos.i6 && preenchidos.i7 && preenchidos.i8 && preenchidos.i9) {    
        velha()
    }
}



const pontosX = document.querySelector('#x')
const pontosO = document.querySelector('#o')
const velhas = document.querySelector('#velha')
let contX = 0
let contO = 0
let contVelhas = 0

const botaoReset = document.createElement('input')
botaoReset.type = 'button'
botaoReset.classList.add('botaoReset')
botaoReset.value = 'Reiniciar Jogo'

function velha () {
    turno.innerHTML = 'DEU VELHA'
    contVelhas++
    velhas.innerHTML = contVelhas
    infos.append(botaoReset)
}    

function ganhouX () {
    turno.innerHTML = '<x>X</x> Ganhou'
    contX++
    pontosX.innerText = contX
    infos.append(botaoReset)
}

function ganhouO () {
    turno.innerHTML = '<o>O</o> Ganhou'
    contO++
    pontosO.innerText = contO
    infos.append(botaoReset)
}
botaoReset.onclick = function () {
    preenchidos = {i1:'', i2:'', i3:'', i4:'', i5:'', i6:'', i7:'', i8:'', i9:''}
    espacos.forEach(espaco => {
        espaco.src = 'img/fundo.webp'
    })
    turno.innerHTML = 'Vez de <x>X</x>'
    botaoReset.remove()
    window.botaoReset = document.createElement('input')
}

// const area = document.querySelector('.area')