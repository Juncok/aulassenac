let vas = 0
let fla = 0
let bot = 0
let flu = 0
let time

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

document.write('Temos ' + vas + ' vascaínos.<br>')
document.write('Temos ' + fla + ' flamenguistas.<br>')
document.write('Temos ' + flu + ' tricolores.<br>')
document.write('Temos ' + bot + ' botafoguenses.<br>')