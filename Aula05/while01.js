// Ler 2 números e um operador até o usuário informar a saída.

let continua = 's'
let num01, num02
let operacao

while (continua == 's') {
    num01 = parseInt(prompt('Digite o primeiro número: '))
    num02 = parseInt(prompt('Digite o primeiro número: '))
    operacao = prompt('Operação: +, -, *, / ')
    if (operacao == '+') {
        document.write('Resultado: ', num01+num02)
        
    } else if (operacao == '-') {
        document.write('Resultado: ', num01-num02)
        
    } else if (operacao == '/') {
        document.write('Resultado: ', num01/num02)
        
    } else if (operacao == '*') {
        document.write('Resultado: ', num01*num01)
        
    } else {
        document.write('Operador inválido.')
    }
    continua = prompt('Continuar? ')
}