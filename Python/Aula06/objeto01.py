class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def Andar(self):
        print(f'{self.nome} está andando.')

pessoa01 = Pessoa('David', 31)

print(pessoa01.Andar())