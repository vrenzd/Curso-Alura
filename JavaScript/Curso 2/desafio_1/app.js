let titulo = document.document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function exibirMensagemNoConsole() {
    console.log('Botão clicado!');
}

function exibirAlerta() {
    alert('Eu amo Js!');
}

function exibirPrompt() {
    let nomeCidade = prompt('Qual é a sua cidade?');
    alert(`Sua cidade é ${nomeCidade}`);
}

function somandoDoisNumeros() {
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let resultado = numero1 + numero2;
    alert(`O resultado da soma é ${resultado}`);
}