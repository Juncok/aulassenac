class Carro {
    constructor(marca, modelo, cor) {
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
    }

    acelerar() { // Método
        console.log('O carro ' + this.modelo + ' está acelerando.')
    } 
}

// Criando um objeto partindo da classe.
let meu_carro = new Carro('Toyota', 'Corolla', 'Preto')
meu_carro.acelerar()