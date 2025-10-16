alunos = []
notas = []
soma_nota = 0

for (i = 0; i < 4; i++) {
    nome = prompt('Digite o nome do aluno: ')
    nota = parseFloat(prompt('Digite a nota do ' + nome + ': '))
    alunos.push(nome)
    notas.push(nota)
    soma_nota+=nota
}

document.write('A média da turma é: ' + (soma_nota/notas.length))