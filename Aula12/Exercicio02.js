// Peça ao usuário para inserir 4 números. Armazene em um array e exiba a média.

numeros = []
soma = 0

for (i=0; i<4; i++) {
    num = parseInt(prompt('Digite um número: '))
    numeros.push(num)
    soma += num
}

media = soma/numeros.length
console.log('A média é: ' + media)