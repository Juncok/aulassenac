// Solicite ao usuário 5 números usando prompt e exiba a soma total, usando um loop.


soma = 0

for (i = 1; i < 6; i++){
    soma=soma+=parseInt(prompt('Digite um número: '))
}

document.write('A soma dos valores é: ' + soma);