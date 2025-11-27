# Criar ou abrir um arquivo para escrita.

with open('dados.txt', 'w') as arquivo:
    arquivo.write('Curso: Programação em Python\n')
    arquivo.write('Aluno: David Benner\n')
    arquivo.write('Situação: Aprovado\n')


