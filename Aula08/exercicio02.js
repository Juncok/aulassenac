// Crie uma função para cada uma das 4 operações aritméticas (soma, subtração, divisão e multiplicação). Depois crie um programa que leia dois números e de acordo com a operação solicitada, chame a função responsável pela operação.

function calculadora(a, b, operador) {
    if (operador == '-') {
        document.write(a-b)
    } else if (operador == '+') {
        document.write(a+b)
    } else if (operador == '/') {
        document.write(a/b)
    } else if (operador == '*') {
        document.write(a*b)
    }
}

num_01 = parseInt(prompt('Digite o primeiro número: '))
num_02 = parseInt(prompt('Digite o segundo número: '))
operador = prompt('Digite um operador: (+, -, *, /)')

calculadora(num_01, num_02, operador)