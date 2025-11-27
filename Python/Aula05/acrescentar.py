from abrir import *

# Acrescentar linhas no texto.

with open('dados.txt', 'a') as arquivo:
    arquivo.write('Projeto: Sustentabilidade Digital\n')

print(Ler())