function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date ()
    var hora =20//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <= 12) { 
        //Bom dia
        img.src = 'img/fotomanha.png'
        document.body.style.background ='#a9ebf9'
    }    else if (hora > 12 && hora <= 18){
        //Boa Tarde
        document.body.style.background = '#fdc96d'
        img.src = 'img/fototarde.png'
    } else {
        //Boa Noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#001d3e'
    }

}