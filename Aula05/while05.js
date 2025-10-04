// Faça um programa para ler um valor e mostrar e contar a tabela de multiplicação desse valor até 10.

let contador = 1
let numero=parseInt(prompt('Digite um número: '))

while (contador < 11) {
    document.write(numero,' x ',contador, ' = ', numero*contador, '<br>')
    contador++
}