vas = 0
fla = 0
bot = 0
flu = 0
time

for (i = 0; i < 10; i++) {
    time = prompt('Qual seu time? ')
    switch (time) {
        case 'fla':
            fla++
            break
        case 'flu':
            flu++
            break
        case 'vas':
            vas++
            break
        case 'bot':
            bot++
            break
    }
}

document.write('Temos ' + vas + ' vascaínos<br>')
document.write('Temos ' + fla + ' vascaínos<br>')
document.write('Temos ' + flu + ' vascaínos<br>')
document.write('Temos ' + bot + ' vascaínos<br>')