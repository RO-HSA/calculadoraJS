let telaVazia = true;
let existeOperador = false;
let input = '';
let primeiroOperando = '';
let segundoOperando = '';
let operadorAtual = '';
let resultado = 0;


function novoValor(operando) {
    const visorCalculo = document.getElementById('calculo');

    if(telaVazia && !existeOperador) {
        primeiroOperando += operando;
        telaVazia = false;
    } else {
        segundoOperando += operando;
    };

    input += operando;
    visorCalculo.innerHTML = input;
}

function limpaTela() {
    const visorCalculo = document.getElementById('calculo');
    const visorResultado = document.getElementById('resultado');
    visorCalculo.innerHTML = '';
    visorResultado.innerHTML = '';
    existeOperador = false;
    telaVazia = true;
    input = '';
    primeiroOperando = '';
    segundoOperando = '';
}

function setaOperador(operador) {
    const visorCalculo = document.getElementById('calculo');
    input += ' ' + operador + ' '
    existeOperador = true;
    operadorAtual = operador;
    visorCalculo.innerHTML = input;
}

function calcula() {
    primeiroOperando = parseInt(primeiroOperando);
    segundoOperando = parseInt(segundoOperando);
    const visorResultado = document.getElementById('resultado');

    switch (operadorAtual) {
        case '+':
            resultado = primeiroOperando + segundoOperando;
            break;
        case '-':
            resultado = primeiroOperando - segundoOperando;
            break;
        case '/':
            resultado = primeiroOperando / segundoOperando;
            break;
        case '*':
            resultado = primeiroOperando * segundoOperando;
            break;
    };

    visorResultado.innerHTML = resultado;
    console.log(visorResultado.innerHTML = resultado)

    resultado = 0;
    primeiroOperando = '';
    segundoOperando = '';
    input = '';
    operadorAtual = '';
    existeOperador = false;
    telaVazia = true;
}

function apaga() {
    const visorCalculo = document.getElementById('calculo');

    input = input.substring(0, input.length -1);
    visorCalculo.innerHTML = input;
}