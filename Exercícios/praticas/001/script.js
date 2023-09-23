function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 5 ) {
        //boa madrugada
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#454c68'
    }else if (hora >= 5 && hora < 12) {
        //bom dia
        img.src = 'imagens/amanhecer.png'
        document.body.style.background = '#002834'
    }else if (hora >= 12 && hora < 19) {
        //boa tarde
        img.src = 'imagens/entardecer.png'
        document.body.style.background = '#8e4c36' 
    } else {
        //boa noite
        img.src = 'imagens/anoite.png'
        document.body.style.background = '#5e5f63'
    }
        
}