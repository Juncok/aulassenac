# Lendo o conteúdo do arquivo.

def Ler():
    with open('dados.txt', 'r') as arquivo:
        return arquivo.read()