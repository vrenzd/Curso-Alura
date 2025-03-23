// DESAFIO 1 
console.log('Bem-vindo!');

// DESAFIO 2 
let nome = 'Victor';
console.log(`Olá, ${nome}!`);

// DESAFIO 3 
let nome1 = 'Victor';
alert(`Olá, ${nome1}!`);

// DESAFIO 4 
let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(linguagem);

// DESAFIO 5 
let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;
console.log(`O resultado da soma entre ${valor1} e ${valor2} é ${resultado}.`);

// DESAFIO 6
let valor3 = 10;
let valor4 = 20;
let resultado1 = valor3 - valor4;
console.log(`O resultado da subtração entre ${valor3} e ${valor4} é ${resultado1}.`);

// DESAFIO 7
let idade = prompt('Qual a sua idade?');
if (idade >= 18) {
    console.log('Você é maior de idade!');
} else {
    console.log('Você é menor de idade!');
}

// DESAFIO 8
let numero = prompt('Digite um número:');
if (numero > 0) {
    console.log('O número é positivo!');
} else if (numero < 0) {
    console.log('O número é negativo!');
} else {
    console.log('O número é zero!');
}

// DESAFIO 9
let count = 0;
while (count < 11) {
    console.log(count);
    count++;
}

// DESAFIO 10
let nota = prompt('Digite a sua nota:');

if (nota >= 7) {
    console.log('Aprovado!');
} else {
    console.log('Reprovado!');
}

// DESAFIO 11
let numAleatorio = Math.random();
console.log(numAleatorio);

// DESAFIO 12
let numInteiro = parseInt(Math.random() * 11);
console.log(numAleatorio);

// DESAFIO 13
let numInteiro1 = parseInt(Math.random() * 1001);
console.log(numInteiro1);
