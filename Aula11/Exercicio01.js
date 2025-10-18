class Moto {
    constructor(Marca, Modelo, Ano) {
        this.Marca = Marca
        this.Modelo = Modelo
        this.Ano = Ano
    }
}


Minha_Moto = new Moto('Kawasaki', 'Z900', 2017)

console.log(`Marca da moto: ${Minha_Moto.Marca}`)
console.log(`Modeloa da moto: ${Minha_Moto.Modelo}`)
console.log(`Ano da moto: ${Minha_Moto.Ano}`)
