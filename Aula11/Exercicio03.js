class Produtos {
    constructor(nome, preco, quantidade) {
        this.nome = nome
        this.preco = preco
        this.quantidade = quantidade
    }

    informacoes_do_produto() {
        console.log(`Produto: ${this.nome} - Preço: R$ ${this.preco} - Quantidade: ${this.quantidade}`)
    }
}

Produto_01 = new Produtos('Arroz Rio João', 3.99, 8)

Produto_01.informacoes_do_produto()