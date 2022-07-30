var inicio = document.querySelector('input#inicio')
var fim = document.querySelector('input#fim')
var passo = document.querySelector('input#passo')
var clicar = document.querySelector('button#clicar')
clicar.addEventListener('click', clicou)
function clicou() {
    var res = document.querySelector('div#res')
    var cont = document.querySelector('div#cont')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
        alert('[ERRO] Tente colocar alguma informção coerente!')
    } else {
        res.innerHTML = "Contando... <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = 1; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem decrescente
            for(let c = i; c >= f ; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}