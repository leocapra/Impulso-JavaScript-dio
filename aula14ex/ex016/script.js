var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var clicar = document.querySelector('button#clicar')
clicar.addEventListener('click', clicou)
function clicou() {
    var ini = Number(inicio)
    var fi = Number(fim)
    var pa = Number(pa)
    var res = document.querySelector('div#res')
    var cont = document.querySelector('div#cont')
    if (inicio.value.length == 0 || ini >= fi ) {
        alert('[ERRO] Tente colocar alguma informção coerente!')
    } else {
        if (ini <= fi && pa >= 0) {
        }
    }
}