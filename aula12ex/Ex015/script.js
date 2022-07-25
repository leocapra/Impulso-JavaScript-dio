function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano00')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Ano de nascimento inválido!!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'bebe.png')
            } else if (idade <= 10) {
                img.setAttribute('src', 'criancam.png')
            } else if (idade <= 17) {
                img.setAttribute('src', 'adolescentem.png')
            } else if (idade <= 26) {
                img.setAttribute('src', 'jovemm.png')
            } else if (idade <= 60) {
                img.setAttribute('src', 'senhor.png')
            } else if (idade <= 105) {
                img.setAttribute('src', 'idoso.png')
            } else if (idade >= 106) {
                img.setAttribute('src', 'cemiterio.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 4) {
                img.setAttribute('src', 'bebe.png')
            } else if (idade <= 10) {
                img.setAttribute('src', 'criancaf.png')
            } else if (idade <= 17) {
                img.setAttribute('src', 'adolescentef.png')
            } else if (idade <= 26) {
                img.setAttribute('src', 'jovemf.png')
            } else if (idade <= 60) {
                img.setAttribute('src', 'senhora.png')
            } else if (idade <= 105) {
                img.setAttribute('src', 'idosa.png')
            } else if (idade >= 106) {
                img.setAttribute('src', 'cemiterio.png')
            }
        }
        if (idade < 106) {
            if (fsex[1].checked || fsex[0].checked) {
                res.innerHTML = `<p>Detectamos alguém do sexo ${genero} com ${idade} anos.</p>`
                res.appendChild(img)
            } else {
                window.alert('[ERRO] Sexo: Inválido!')
            }
        } else if (fsex[1].checked || fsex[0].checked){
            res.innerHTML = `<p>Essa pessoa de ${idade} anos está provavelmente morta!</p>`
            res.appendChild(img)
        } else {
            window.alert('[ERRO] Sexo: Inválido!')
        }
    }
}