function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var cumprimento = document.getElementById('cumprimento')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#81b0ec'
        cumprimento.innerHTML = 'Bom dia!'
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#edbf73'
        cumprimento.innerHTML = 'Boa tarde!'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#192c53'
        cumprimento.innerHTML = 'Boa Noite!'
    }
}