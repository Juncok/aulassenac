// Crie um array com 10 números e exiba apenas os que forem múltiplos de 3.

numeros=[]

while(true) {
    numero = parseInt(prompt('Digite um número: (digite "sair" para sair)'))
    alert(numero != 'sair')
    if (isNaN(numero) == true && numero !== 'sair') {
        alert('Número inválido.')
        continue
    } else if (numero == 'sair'){
        break
    } else {
        numeros.push(numero)
    }
}

document.write(numeros)