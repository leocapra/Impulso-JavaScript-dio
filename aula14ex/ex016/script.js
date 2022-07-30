var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var clicar = document.querySelector('button#clicar')
clicar.addEventListener('click', clicou)
function clicou() {
    var res = document.querySelector('div#res')
    const cont = document.querySelector('div#cont')
    const paragrafo = document.createElement("p")
    const soma = document.createTextNode(`${inicio}`)
    if (inicio.value.length == 0 || Number(inicio.value) > Number(fim.value) ) {
        alert('[ERRO] Tente colocar alguma informção coerente!')
    } else {
        if (Number(inicio.value) <= Number(fim.value) && Number(passo.value) >= 0) {
            while (Number(inicio.value) <= Number(fim.value)) {
                res.innerHTML = `${Number(inicio.value)} `
                inicio = inicio + Number(passo.value)
                cont.innerHTML += paragrafo.innerHTML = `${inicio}`
            }
        }
    }
}