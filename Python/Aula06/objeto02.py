class Animal:
    def __init__(self, nome):
        self.nome = nome

class Cachorro(Animal):
    def som(self):
        return 'Au au'

class Gato(Animal):
    def som(self):
        return 'Miau'

cachorro1 = Cachorro('Layka')
print(cachorro1.nome, cachorro1.som())