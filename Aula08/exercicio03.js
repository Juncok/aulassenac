// Crie uma função chamada verificarIdade(idade), que recebe a idade de uma pessoa e retorna "Maior de idade" se for 18 anos ou mais, e "Menor de idade" caso contrário. 


function verificarIdade(idade) {
    if (idade < 18) {
        document.write('Você é menor de idade.')
    } else {
        document.write('Você é maior de idade.')
    }
}

verificarIdade(parseInt(prompt('Qual sua idade? ')))