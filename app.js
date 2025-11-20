alert('Boas vindas ao jogo do número secreto!');

let numeroScreto = 8;
console.log('Número secreto é: ' + numeroScreto);
let chute = prompt('Escolha um número entre 1 e 10: ');

// se o chute for igual ao número secreto
if (numeroScreto == chute) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroScreto} :)`);
} else {
    alert('Que pena! Você errou o número secreto :(');
}

