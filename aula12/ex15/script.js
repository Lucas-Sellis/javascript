function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            gênero = 'Homem';

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criança-mas.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-mas.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-mas.png');
            } else {
                img.setAttribute('src', 'img/idoso-mas.png');
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher';

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/criança-fem.png');
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-fem.png');
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-fem.png');
            } else {
                img.setAttribute('src', 'img/idoso-fem.png');
            }
        }

        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
