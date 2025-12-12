# Crie uma classe chamada Pessoa com os atributos nome e idade. Adicione um método chamado exibir_informacoes que exibe o nome e a idade da pessoa.

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def ExibirInformacoes(self):
        return f'Nome: {self.nome} - Idade: {self.idade}'



pessoa01 = Pessoa('David Benner', 31)
print(pessoa01.ExibirInformacoes())