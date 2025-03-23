// DESAFIO 1 - IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

// Exemplo de uso
let peso = 70;  // em quilogramas
let altura = 1.75;  // em metros
let imc = calcularIMC(peso, altura);
console.log("O IMC é: " + imc.toFixed(2));

// DESAFIO 2 - FATORIAL
function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
}

// Exemplo de uso
let numero = 5;
let fatorial = calcularFatorial(numero);
console.log("O fatorial de " + numero + " é: " + fatorial);

// DESAFIO 3 - CONVERSOR DE MOEDA
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 100;  // valor em dólares
let valorEmReal = converterDolarParaReal(valorEmDolar);
console.log("O valor em reais é: R$" + valorEmReal);

// DESAFIO 4 - ÁREA E PERÍMETRO
function calcularAreaEPerimetro(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log("Área: " + area + " metros quadrados");
    console.log("Perímetro: " + perimetro + " metros");
}

// Exemplo de uso
let altura1 = 5;  // em metros
let largura = 4;  // em metros
calcularAreaEPerimetro(altura1, largura);

// DESAFIO 5 - ÁREA E PERÍMETRO DE UM CÍRCULO
function calcularAreaEPerimetroCircular(raio) {
    var pi = 3.14;
    var area = pi * raio * raio;
    var perimetro = 2 * pi * raio;
    console.log("Área: " + area + " metros quadrados");
    console.log("Perímetro: " + perimetro + " metros");
}

// Exemplo de uso
var raio = 3;  // em metros
calcularAreaEPerimetroCircular(raio);

// DESAFIO 6 - TABUADA
function mostrarTabuada(numero) {
    for (var i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i));
    }
}

// Exemplo de uso
var numero2 = 5;
mostrarTabuada(numero2);

