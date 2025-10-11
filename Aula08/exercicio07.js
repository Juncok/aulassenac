// Crie uma função que calcula e informa média de notas de um aluno.


function media() {
    encerrar = ''
    soma = 0, vezes = 0
    while (encerrar != 'nao') {
        soma += parseFloat(prompt('Digite uma nota: '))
        vezes++
        encerrar = prompt('Deseja continuar? (Digite "não" para encerrar.')
    }
    if (encerrar === 'nao') {
        
        return document.write('O total das notas é: '+ soma + '<br>A média do aluno é: ' + soma/vezes)
    }
}

media()