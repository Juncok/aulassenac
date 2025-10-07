// Solicite um nome ao usuário e peça a quantidade de vezes que ele deseja exibi-lo na tela. Utilize um loop while. 


nome = prompt('Digite seu nome: ')
quantidade = parseInt(prompt('Quantas vezes deseja exibir seu nome na tela? '))

while (quantidade > 0) {
    document.write(quantidade, ' = ', nome, '<br>')
    quantidade--
}