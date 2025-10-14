// Peça ao usuário para digitar três números e armazene-os em um vetor. Depois, exiba o maior número.

numeros = []

for (i= 1; i < 4; i++) {
    numeros.push(parseInt(prompt('Digite o ' + i + 'º número: ')))
}

document.write('Os números digitados são: ' + numeros)
// Primeira opção para obter o maior.
document.write('<br>O maior número digitado foi: ' + Math.max(numeros[0], numeros[1], numeros[2]))


// Segunda opção para obter o maior.
maior = 0
for (i=0; i<3; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
}

document.write('<br>O maior número digitado foi: ' + maior)
