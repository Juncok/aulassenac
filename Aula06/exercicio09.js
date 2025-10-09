let salario, somasalf = 0, somasalm = 0, qtdm = 0, qtdf = 0
controle = 'continua', SVGTextContentElement

while (controle != 'fim') {
    salario = parseFloat(prompt('Informe o salário: '))
    sexo = prompt('informe o sexo: ')
    if (sexo == 'f' || sexo == 'F') {
        qtdf++; somasalf += salario
    } else if (sexo == 'm' || sexo == 'M') {
        qtdm++; somasalm += salario
    } else {(alert('Sexo inválido!'))}
    controle = prompt('Deseja continuar? Digite "fim" para sair.')
}

document.write('Quantidade de mulheres: ' + qtdf+ ' - Salários femininos: ' + somasalf + '<br>')
document.write('Quantidade de homens: ' + qtdm + ' - Salários masculinos: ' + somasalm + '<br>')
document.write('Média dos salários: ' + ((somasalf+somasalm)/(qtdf+qtdm)))