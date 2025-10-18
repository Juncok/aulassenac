class Pessoa {
    constructor(Nome, Idade, Profissao) {
        this.Nome = Nome;
        this.Idade = Idade;
        this.Profissao = Profissao;
    }
}

uma_pessoa = new Pessoa('David Benner', 31, 'TI')
console.log(`Nome: ${uma_pessoa.Nome}`)
console.log(`Idade: ${uma_pessoa.Idade}`)
console.log(`Profissão: ${uma_pessoa.Profissao}`)