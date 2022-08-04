let add = document.querySelector('button#add')
let numero = document.querySelector('input#num')
let most = document.querySelector('select#most')
let res = document.querySelector('div#res')
let valores = []

add.addEventListener('click', adicionar)

function thisNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (thisNumber(numero.value) && !inList(num.value, valores)) {
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}