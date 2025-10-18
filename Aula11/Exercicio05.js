class Personagem {
    constructor(nome_per, energia_per, nivel_per) {
        this.nome_per = nome_per
        this.energia_per = energia_per
        this.nivel_per = nivel_per
    }

    aumentar_energia(energia) {
        this.energia_per += energia
        console.log(`Energia aumentada em ${energia}. Total de energia ${this.energia_per}`)
    }

    diminuir_energia(energia) {
        this.energia_per -= energia
        console.log(`Energia diminuída em ${energia}. Total de energia ${this.energia_per}`)
    }

    subir_de_nivel(nivel) {
        this.nivel_per += nivel
        console.log(`Nível aumentado para ${this.nivel_per}`)
    }
}


meu_personagem = new Personagem('Dennis', 100, 0)

console.log(`Personagem: ${meu_personagem.nome_per}`)
console.log(`Personagem: ${meu_personagem.energia_per}`)
console.log(`Personagem: ${meu_personagem.nivel_per}`)
meu_personagem.aumentar_energia(80)
meu_personagem.diminuir_energia(40)