# Crie um programa que leia três notas de um aluno e calcule a média aritmética.


notas = []
soma = 0
for nota in range(1,4):
    valor = float(input(f'Digite a {nota}ª nota: '))
    notas.append(valor)
    soma+=valor

print(soma)
print(f'A média das notas é: {soma/3}')