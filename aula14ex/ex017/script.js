var gerar = document.querySelector('button#gerar')
gerar.addEventListener('click', clicar)
function clicar() {
    let num = document.getElementById('num')
    let tab = document.querySelector('select#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}