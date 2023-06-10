let naoExisteOperador = true;
let input = '';
let operadorAtual = '';
let primeiroOperando = '';
let segundoOperando = '';
let resultado = 0;
let resultadoAuxiliar = 0;


function novoValor(operando) {
    const visorCalculo = document.getElementById('calculo');

    if (operadorAtual == '') {
        primeiroOperando += operando;

    } else {
        segundoOperando += operando;
    }

    input += operando;
    visorCalculo.innerHTML = input;

    console.log('Primeiro operando: ' + primeiroOperando + ' Segundo operando: ' + segundoOperando + ' Operando atual: ' + operando)
}

function limpaTela() {
    const visorCalculo = document.getElementById('calculo');
    const visorResultado = document.getElementById('resultado');
    visorCalculo.innerHTML = '';
    visorResultado.innerHTML = '';
    naoExisteOperador = true;
    input = '';
    primeiroOperando = 0;
    segundoOperando = 0;
    operadorAtual = '';
}

function setaOperador(operador) {
    const visorCalculo = document.getElementById('calculo');

    if (resultadoAuxiliar > 0) {
        input = resultadoAuxiliar + ' ' + operador + ' ';
        primeiroOperando += resultadoAuxiliar;
        resultadoAuxiliar = 0
    } else {
        input += ' ' + operador + ' ';
    }

    naoExisteOperador = false;
    operadorAtual = operador;
    visorCalculo.innerHTML = input;
}

function calcula() {
    primeiroOperandoFloat = parseFloat(primeiroOperando);
    segundoOperandoFloat = parseFloat(segundoOperando);
    const visorResultado = document.getElementById('resultado');

    switch (operadorAtual) {
        case '+':
            resultado = primeiroOperandoFloat + segundoOperandoFloat;
            resultadoAuxiliar = resultado;
            break;
        case '-':
            resultado = primeiroOperandoFloat - segundoOperandoFloat;
            resultadoAuxiliar = resultado;
            break;
        case '/':
            resultado = primeiroOperandoFloat / segundoOperandoFloat;
            resultadoAuxiliar = resultado;
            break;
        case '*':
            resultado = primeiroOperandoFloat * segundoOperandoFloat;
            resultadoAuxiliar = resultado;
            break;
    };

    visorResultado.innerHTML = resultado;

    primeiroOperando = '';
    segundoOperando = '';
    input = '';
    operadorAtual = '';
    NaoExisteOperador = true;
}

function apaga() {
    const visorCalculo = document.getElementById('calculo');

    input = input.substring(0, input.length -1);
    visorCalculo.innerHTML = input;
}