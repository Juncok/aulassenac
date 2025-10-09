idade_maior = 0
nome_da_idade_maior = ''


for (i = 0; i < 3; i++) {
    nome = prompt('Digite seu nome: ')
    idade = parseInt(prompt('Digite sua idade'))
    if (idade > idade_maior) {
        idade_maior = idade
        nome_da_idade_maior = nome
    }
}

document.write('O com maior idade é o ' + nome_da_idade_maior + ', e ele tem ' + idade_maior)