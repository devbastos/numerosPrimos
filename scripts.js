// criar função para mostrar os numeros primos

numerosPrimos(87); //colocque aqui o numero

function numerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        let ePrimo = true;

        for (let divisor = 2; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                ePrimo = false;
                break;
            }
        }
        if (ePrimo) console.log(numero);
    }
}