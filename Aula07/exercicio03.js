preco = 0

for (i=0; i < 5; i++) {
    preco_produto=(parseInt(prompt('Digite um valor: ')))
    if (preco < preco_produto)
        preco=preco_produto
}

document.write('O preço maior é: ' + preco)