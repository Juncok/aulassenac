// Crie uma função chamada cumprimentar(nome), que recebe um nome via prompt como parâmetro e exibe a mensagem "Olá, [nome], tudo bem?".

function cumprimentar(nome) {
    document.write('Olá ' + nome + ', tudo bem?')
}

nome = prompt('Qual seu nome? ')

cumprimentar(nome)