dias_da_semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira']

numero = parseInt(prompt('Digete um número entre 1 e 7: '))

if (numero >= 1 && numero <=7) {
    document.write('O dia da semana seecionado foi: ' + dias_da_semana[numero-1])
} else {
    document.write('Número inválido!')
}