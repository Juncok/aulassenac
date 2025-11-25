# Dada a lista numeros = [4, 7, 2, 9, 5], escreva um programa que calcule a soma de todos os valores.

numeros = [4, 7, 2, 9, 5]
soma = 0
for i in numeros:
    soma+=i

print(f'A soma da lista "numeros" é {soma}')