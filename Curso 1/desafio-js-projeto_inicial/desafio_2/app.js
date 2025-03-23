// DESAFIO 1
semana = prompt('Qual é o dia da semana?');

// converte para letras minúsculas
semana = semana.toLowerCase();

if (semana === 'domingo' || semana === 'sábado' || semana === 'sabado') {
    alert('Bom fim de semana!');
} else{
    alert('Boa semana!');
}

// DESAFIO 2
num = prompt('Digite um número');

if (num > 0) {
    alert('O número é Positivo!');
} else if (num < 0) {
    alert('O número é Negativo!');
}

 
// DESAFIO 3
pontuacao = prompt('Digite a pontuação do jogador');

if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar!');
}

// DESAFIO 4
let saldo = prompt('Digite o valor do saldo');

// converte para número
saldo = parseFloat(saldo); 
if (saldo > 0) {
    alert(`Seu saldo de R$${saldo.toFixed(2)} está positivo!`);
} else if (saldo < 0) {
    alert(`Seu saldo de R$${saldo.toFixed(2)} está negativo!`);
}

// DESAFIO 5
let nome = prompt('Digite o nome do usuário');
alert(`Olá, ${nome}, seja bem-vindo(a)!`);
