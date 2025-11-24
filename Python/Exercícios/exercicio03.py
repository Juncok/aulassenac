# Crie um programa que leia um valor em reais (R$) e mostre o valor convertido em dólares (US$), considerando uma taxa de câmbio fornecida pelo usuário.



valor_real = float(input('Digite um valor em R$: '))
cambio_dolar = float(input('Digite o valor do câmbio: '))
print(f'Valor digitado: R$ {valor_real} - Câmbio digitado: U$ {cambio_dolar} - Valor convertido: R$ {valor_real * cambio_dolar}')