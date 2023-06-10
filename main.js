const visorCalculo = document.getElementById('calculo');
const visorResultado = document.getElementById('resultado');
let naoExisteOperador = true;
let input = '';
let operadorAtual = '';
let primeiroOperando = '';
let segundoOperando = '';
let resultado = 0;
let resultadoAuxiliar = 0;


function novoValor(operando) {

    if (operadorAtual == '') {
        primeiroOperando += operando;

    } else {
        segundoOperando += operando;
    }

    input += operando;
    visorCalculo.innerHTML = input;
}

function limpaTela() {
    visorCalculo.innerHTML = '';
    visorResultado.innerHTML = '';
    naoExisteOperador = true;
    input = '';
    primeiroOperando = 0;
    segundoOperando = 0;
    operadorAtual = '';
}

function setaOperador(operador) {
    
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
    input = input.substring(0, input.length -1);
    visorCalculo.innerHTML = input;
}