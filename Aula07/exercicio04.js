total = 0

for (i = 1; i < 11; i++) {
    total += parseInt(prompt('Digite um número: '))
}

document.write('O total digitado foi: ' + total + ' - A média é: ' + (total/10))