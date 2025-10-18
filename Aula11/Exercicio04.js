class Filme {
    constructor(titulo, diretor, ano_de_lancamento) {
        this.titulo = titulo
        this.diretor = diretor
        this.ano_de_lancamento = ano_de_lancamento
    }

    informacoes_do_filme() {
        console.log(`Filme: ${this.titulo} \n Direção de: ${this.diretor}, Ano de lançamento: ${this.ano_de_lancamento}`)
    }
}

Filme01 = new Filme('Harry Potter e a Pedra Filosofal', 'Chris Columbus', 2001)

Filme01.informacoes_do_filme()