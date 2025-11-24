# Escreva um programa que receba três números inteiros e determine qual deles é o maior.


numeros = []
num1 = int(input('Digite um número: '))
numeros.append(num1)
num2 = int(input('Digite um número: '))
numeros.append(num2)
num3 = int(input('Digite um número: '))
numeros.append(num3)


# Metodo com IF
while True:
    if num1 > num2 and num1 > num3:
        print(f'Número maior com IF: {num1}')
        break
    elif num2 > num1 and num2 > num3:
        print(f'Número maior com IF: {num2}')
        break
    elif num3 > num1 and num3 > num2:
        print(f'Número maior com IF: {num3}')
        break

def Numero_Maior(*num):
    return max(numeros)

print(f'Número maior com Função: {Numero_Maior(numeros)}')