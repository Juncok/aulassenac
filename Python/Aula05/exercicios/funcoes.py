def Criar(produto, valor):
    with open('produtos.txt', 'a') as arquivo:
        arquivo.write(produto + ', ' + valor + '|' + '\n')

def Ler():
    with open('produtos.txt', 'r') as arquivo:
        return arquivo.read()

def Media():
    itens = Ler().replace('\n', '').split("|")
    itens.pop()
    soma = 0
    for i in itens:
        soma += float(i.split(',')[1])
        media = soma/len(itens)
    return str(media).replace('.', ',')

