let add = document.querySelector('button#add')
let num = document.querySelector('input#num')
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
    if (thisNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `O valor ${num.value} foi armazenado!`
        most.appendChild(opt)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

//-------------------------------------

let fin = document.querySelector('button#fin')

fin.addEventListener('click', finalizar)

function finalizar() {
        if (valores.length == 0) {
        window.alert('Não existe valor armazenado na lista!')

    } else if (valores.length == 1) { //singular
        res.innerHTML = `<p>Ao todo, temos <strong>${valores.length}</strong> número armazenado!</p>`
        res.innerHTML += `<p>Para mais informações, armazene mais números!</p>`

    } else { //plural
        res.innerHTML = `<p>Ao todo, temos <strong>${valores.length}</strong> números armazenados!</p>`
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / valores.length
        res.innerHTML += `<p>O maior valor informado foi o <strong>${maior}</strong>!</p>`
        res.innerHTML += `<p>O menor valor informado foi o <strong>${menor}</strong>!</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>!</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>!</p>`

    }
}