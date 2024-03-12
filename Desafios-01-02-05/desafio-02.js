//Sequência de Fibonacci

function sequenciaFibonacci(numero) {
    let sequencia = 0;
    let primeiroNumero = 0;
    let segundoNumero = 1;
    
    while(sequencia < numero) {
        sequencia = primeiroNumero + segundoNumero;                            //calculo da sequência
        primeiroNumero = segundoNumero;
        segundoNumero = sequencia;
        if (sequencia === numero) {
            console.log(`O número ${numero} pertence a sequência de Fibonacci`)
        }
    }

    if (sequencia != numero) {
        console.log(`O número ${numero} não pertence a sequência de Fibonacci`)
    }
}

const inputNumero = 32;
sequenciaFibonacci(inputNumero)