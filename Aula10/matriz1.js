matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
// Exibindo um dado.
console.log(matriz[1][1])
console.log('\n')
// Percorrendo a matriz.
for (i = 0; i < matriz.length; i++) {
    for (j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}