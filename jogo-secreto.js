alert('Boas vindas ao jogo do número secreto!');

let numeroMaximo = parseInt(prompt('Escolha o número máximo para o jogo: '));
let numeroScreto = parseInt(Math.random() * numeroMaximo) + 1;

console.log('Número secreto é: ' + numeroScreto);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroScreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}: `);

    // se o chute for igual ao número secreto
    if (numeroScreto == chute) {
        break;
    } else {
        // alert('Que pena! Você errou o número secreto :(');

        if (chute < numeroScreto) {
            alert('O número secreto é maior que ' + chute + '. Tente novamente!');
        } else {
            alert('O número secreto é menor que ' + chute + '. Tente novamente!');
        }

        tentativas++;
    }
}

let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
alert(`Parabéns! Você descobriu o número secreto ${numeroScreto} com ${tentativas} ${palavraTentativa} :)`);