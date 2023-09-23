function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    //valor = 0                   //valor acima do ano atual
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/fotomenino.png')
           } else if (idade < 23) {
               // jovem
               img.setAttribute('src', 'imagens/fotogaroto.png')
           } else if (idade < 60) {
               //adulto
               img.setAttribute('src', 'imagens/fotohomem.png')
           } else {
               //idoso
               img.setAttribute('src', 'imagens/fotoidoso.png')
           }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //criança
                img.setAttribute('src', 'imagens/fotomenina.png')
           } else if (idade < 23) {
               // jovem
               img.setAttribute('src', 'imagens/fotogarota.png')
           } else if (idade < 60) {
               //adulto
               img.setAttribute('src', 'imagens/fotomulher.png')
           } else {
               //idoso
               img.setAttribute('src', 'imagens/fotoidosa.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}