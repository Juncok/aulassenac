# ler altura e peso, e informar o imc e qual a situação do indivíduo.

altura = float(input('Altura: '))
peso = float(input('Peso: '))
imc = peso/(altura*2)

print(f'Seu IMC é {imc}')