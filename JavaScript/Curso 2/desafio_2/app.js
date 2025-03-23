// DESAFIO 1
function saudacao() {
    console.log("Olá, mundo!");
}
saudacao();

// DESAFIO 2
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirNome('Victor');

// DESAFIO 3
function dobroNum(numero) {
    return numero * 2;
}

let resultado = dobroNum(5);
console.log(resultado);

// DESAFIO 4
function media(um, dois, tres) {
    return (um + dois + tres) / 3;   
}

let mediaResultado = media(3, 5, 7);
console.log(mediaResultado);

// DESAFIO 5
function numMaior(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let maiorResultado = numMaior(10, 5);
console.log(maiorResultado);

// DESAFIO 6
function multPorEleMesmo(num) {
    return num * num;
}

let potenciaResultado = multPorEleMesmo(3);
console.log(potenciaResultado);
