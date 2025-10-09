// Verificar se número é par ou ímpar e repetir até digitar zero.


let numero
while (numero != 0) {
    numero = parseInt(prompt('Digite um número: '))
    if (numero != 0) {
        if (numero % 2 == 0) {
            alert('O número ' + numero + ' é par.')
        } else {
            alert('O número ' + numero + ' é ímpar.')
        }
    } else {
        document.write('Programa finalizado.')
    }  
} 