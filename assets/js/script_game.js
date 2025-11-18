let altura = 0;
let largura = 0;
let vidas = 3;
let tempo = 15;
let pontos = 0;
let dificuldade = localStorage.getItem('dificuldade');
let mosquitoVelocidade = 2000;

function aplicarDificuldade(){

    if(dificuldade == 'normal'){
        tempo = 20;
        mosquitoVelocidade = 2000;
    }
    else if(dificuldade == 'dificil'){
        tempo = 40;
        mosquitoVelocidade = 1500;
    }
    else if(dificuldade == 'pesadelo'){
        tempo = 60;
        mosquitoVelocidade = 1000;
    }

}
aplicarDificuldade();

function medirTela() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    //document.getElementById("testandoValorTela").innerHTML = '<h1>' +  altura + ", " + largura + '</h1>';

    console.log(altura, largura);
}

medirTela();

function timer() {
    
        if (tempo < 0) {
            window.location.href = 'victory.html'
        }
        else {
            document.getElementById('cronometro').innerHTML = tempo;
            tempo = tempo - 1;
        }
}

function pontuacao(){
    document.getElementById('pontos').innerHTML = pontos;
}

function spawnMosquito() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 1) {
            document.getElementById('hp' + vidas).src = 'assets/images/coracao_vazio.png';
            vidas--;
        }
        else {
            //alert('Fim de jogo!');
            window.location.href = 'game_over.html';
        }

    }

    var positionX = Math.floor(Math.random() * largura) - 90;
    var positionY = Math.floor(Math.random() * altura) - 90;
    console.log(positionX, positionY);

    if (positionX < 0) {
        positionX = 0;
    }

    if (positionY < 0) {
        positionY = 0;
    }

    let mosquito = document.createElement('img');
    mosquito.src = 'assets/images/mosquito.png';
    mosquito.className = tamanhoMosquito();
    mosquito.style.top = positionY + 'px';
    mosquito.style.left = positionX + 'px';
    mosquito.style.position = 'absolute';
    let flip = flipMosquito();
    mosquito.style.transform = 'scaleX(' + flip + ')';
    mosquito.id = 'mosquito';

    mosquito.addEventListener('click', function(){

        if(mosquito.className == 'mosquito'){
            pontos += 5;
        }
        else if(mosquito.className == 'mosquito2'){
            pontos += 10;
        }
        else if(mosquito.className == 'mosquito3'){
            pontos += 20;
        }
        pontuacao();
        this.remove();
    })

    document.body.appendChild(mosquito);
}


function tamanhoMosquito() {

    var tamanho = Math.random() * 3;

    if (tamanho >= 0 && tamanho < 1) {
        return 'mosquito';
    }
    else if (tamanho > 1 && tamanho < 2) {
        return 'mosquito2';
    }
    else {
        return 'mosquito3'
    }

}

function flipMosquito() {
    var determinar = Math.round(Math.random() * 10);

    if (determinar >= 0 && determinar < 5) {
        return -1;
    }
    else {
        return 1;
    }

}

function spawnControl() {
    timer();
    pontuacao();
    setInterval(timer, 1000);
    setInterval(spawnMosquito, mosquitoVelocidade);
}

spawnControl();