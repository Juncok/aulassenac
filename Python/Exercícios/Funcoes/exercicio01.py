def exibir_dados():
    with open('funcionarios.txt', 'r', encoding='utf-8') as arquivo:
        print('FUNCIONÁRIOS')
        for i in arquivo.read():
            print(i)