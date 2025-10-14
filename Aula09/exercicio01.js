//Sorteio de números

let numero_sortido = Math.floor(Math.random() * 100)

if ((numero_sortido % 2) == 0) {
    console.log('O número '+ numero_sortido + ' é par.')
} else {
    console.log('O número '+ numero_sortido + ' é ímpar.')
}
