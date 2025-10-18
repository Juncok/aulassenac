class Produto {
    constructor(nome, preco, qtd_estoque) {
        this.nome = nome
        this.preco = preco
        this.qtd_estoque = qtd_estoque
    }

    venda(estoque) {
        if (this.qtd_estoque == 0) {
            console.log(`O ${this.nome} está com o estoque vazio!`)
        } else {
            this.qtd_estoque -= estoque
            console.log(`Estoque de ${this.nome} agora é de ${this.qtd_estoque}.`)
        }
    }

    repor_estoque(estoque) {
        this.qtd_estoque += estoque
        console.log(`O ${this.nome} agora é de ${this.qtd_estoque}.`)
    }

    informacoes_do_produto() {
        console.log(`Produto: ${this.nome} \nPreço: R$ ${this.preco} \nQuantidade Estoque: ${this.qtd_estoque}`)
    }
}

um_produto = new Produto('Feijão', 4.50, 8)

um_produto.informacoes_do_produto()
um_produto.repor_estoque(10)
um_produto.venda(19)