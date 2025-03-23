alert('Bem-vindo ao jogo do número secreto!');
let numMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numMaximo}`);
    // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}!`);
        } else {
            alert(`O número secreto é menor que ${chute}!`);
        }
        //tentativas = tentativas + 1;
        tentativas++; // mesma coisa que a linha de cima
    }   
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'; // Operador ternário
alert(`Parabéns, você acertou com ${tentativas} é o ${numeroSecreto}!`);

