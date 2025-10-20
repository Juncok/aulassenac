// Crie uma função que recebe um array de nomes e retorna um novo array com os nomes em ordem reversa.
function inverterNomes(nomes) {
    novo = []
    for (i = nomes.length -1; i >= 0; i--) {
        novo.push(nomes[i])
    }
    console.log(novo)
}

lista = ['Kléber', 'Vinícius', 'Pedro']

inverterNomes(lista)