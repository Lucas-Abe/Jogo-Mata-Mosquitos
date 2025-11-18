function iniciarJogo() {
    let dificuldade = document.getElementById('selecionar-dificuldade').value;
    
    if (dificuldade == '') {
        return;
    }

    localStorage.setItem('dificuldade', dificuldade);
    window.location.href = 'jogo.html';
}

function mudarBotaoCor(){

const botaoCor = document.getElementById('selecionar-dificuldade');
let botao = document.querySelector('#botao-redirect button');

function checarDificuldade(){
    let dificuldade = document.getElementById('selecionar-dificuldade').value;
    
    if (dificuldade == '') {
        console.log(dificuldade);
        botao.classList.add('botao-invalido');
    }
    else{
        botao.classList.remove('botao-invalido');
    }
}

botaoCor.addEventListener('input', checarDificuldade);
checarDificuldade();

}

mudarBotaoCor();
