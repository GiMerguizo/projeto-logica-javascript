/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10:'; */

let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroScreto = gerarNumeroSecreto();
console.log('Número secreto gerado: ' + numeroScreto);
let tentativas = 1;

exibirMensagemInicial();

// Funções
function exibirTextoTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Jogo do Número Secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10:');
}

function verificarChute() {
    console.log('Botão clicado');

    let chute = parseInt(document.querySelector('input').value);
    console.log(chute == numeroScreto);

    if (chute == numeroScreto) {
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}. :)`;
        exibirTextoTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroScreto) {
            exibirTextoTela('p', 'O número secreto é maior que ' + chute + '. Tente novamente!');
        } else {
            exibirTextoTela('p', 'O número secreto é menor que ' + chute + '. Tente novamente!');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista >= numeroLimite) {
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroScreto = gerarNumeroSecreto();
    console.log('Número secreto gerado: ' + numeroScreto);
    tentativas = 1;
    exibirMensagemInicial();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}
