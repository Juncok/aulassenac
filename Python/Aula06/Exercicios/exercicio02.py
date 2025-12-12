class Produto:
    def __init__(self, nome:str, preco:float, estoque:int):
        self.nome = nome
        self.preco = preco
        self.estoque = estoque

    def vender(self):
        if self.estoque > 0:
            self.estoque -= 1
            return 'venda concluída com sucesso'
        else:
            return f'{self.nome}, está sem estoque!'

    def Repor(self, quantidade):
        self.estoque += quantidade

produto01 = Produto('Mamão', 5.99, 0)
print(produto01.vender())
produto01.Repor(8)
print(produto01.estoque)
print(produto01.vender())
print(produto01.estoque)
