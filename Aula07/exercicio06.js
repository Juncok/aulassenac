escolha = ''

while (escolha != 'sair') {
    escolha = parseInt(prompt('Digite uma opção entre: 0: Olá, 1: Data atual, 2: Nome do aluno, 3: Sair'))
    switch(escolha) {
        case 0:
            alert('Olá mundo!')
            break
        case 1:
            alert('Hoje é 08/10/2025')
            break
        case 2:
            alert('David Benner')
            break
        case 3:
            escolha='sair'
    }
}

document.write('Programa finalizado.')