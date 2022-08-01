var gerar = document.querySelector('button#gerar')
gerar.addEventListener('click', clicou)
function clicou() {
    let numero = document.querySelector('input#num')

    if (numero.value.length == 0) {
        window.alert('Por favor, digite um número para a tabuada!')
    } else {
        let num = Number(numero.value)
        let tab = document.querySelector('select#tabuada')
        tab.innerHTML = ``
        for (var c = 1 ; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tab.appendChild(item)
        }
        let m = document.querySelector('p#msg')
            m.innerHTML = `Tabuada do ${num} !  :)`
    }
}