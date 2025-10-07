// Solicite ao usuário um número e exiba a tabuada de multiplicação desse número de 1 a 10. 


numero = parseInt(prompt('Digite um número: '))
contador = 1

do {
    document.write(numero + ' x ' + contador + ' = ' + numero*contador + '<br>')
    contador++
} while (contador < 10)