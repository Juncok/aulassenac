class Conta_Bancaria {
    #saldo // Atributo privado

    constructor(titular, saldo) {
        this.titular = titular
        this.#saldo = saldo

    }

    depositar(valor) {
        this.#saldo += valor
        console.log(`Depósito de ${this.titular} realizado com sucesso. Saldo R$ ${this.#saldo}`)
    }

    consultar_saldo() {
        console.log(`O saldo é R$ ${this.#saldo}`)
    }
}


conta = new Conta_Bancaria('David Benner', 0)

conta.depositar(888)
conta.consultar_saldo()