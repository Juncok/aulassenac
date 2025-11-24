alunos_e_notas = []
somente_notas = 0
maior_nota = 0

for (let i = 1; i < 4; i++) {
    lista_temporaria = []
    for (let j = 1; j < 4; j++) {
        if (j == 1) {
            nome = prompt('Digite o nome do aluno: ')
            nota = parseFloat(prompt('Digite a ' + j + 'ª nota de ' + nome + ': '))
            lista_temporaria.push(nome)
            lista_temporaria.push(nota)
            
        } else {
            nota = parseFloat(prompt('Digite a ' + j + 'ª nota de ' + nome + ': '))
            lista_temporaria.push(nota)
                }
            somente_notas += nota
        }
        
        alunos_e_notas.push(lista_temporaria)
}
// Letra a e b: Criar uma matriz 3x3 e mostrar de forma organizada.
document.write('[NOME ALUNO, NOTA 1, NOTA 2, NOTA 3]<br><br>')

for (i=0; i < alunos_e_notas.length; i++) {
    document.write('[' + alunos_e_notas[i].join(', ') + ']' + '<br>')
}


// Letra c: Calcular e exibir a média das notas de cada aluno.
document.write('<br>--------<br> A média das notas é: ' + somente_notas/alunos_e_notas.length)