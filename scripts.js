// criar função para mostrar os numeros primos

numerosPrimos(100); //colocque aqui o numero

function numerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (noPrimo(numero)) console.log(numero);
    }
}

function noPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}