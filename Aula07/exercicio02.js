idade_maior = 0
idade_menor = 0

for (i = 0; i < 11; i++) {
    idade = parseInt(prompt('Digite sua idade: '))
    if (idade < 18) {
        idade_menor++
    } else {
        idade_maior++
    }
}

document.write('Temos ' + idade_menor + ' menor de idade.<br>')
document.write('Temos ' + idade_maior + ' maior de idade.')