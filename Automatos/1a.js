var q0 = {
    0: 'q0',
    1: 'q1'
}

var q1 = {
    0: 'q2',
    1: false
}

var q2 = {
    0: 'q0',
    1: false
}

var mudarState = {
    'q0': q0,
    'q1': q1,
    'q2': q2
}

var entrada = '100'

var state = q0
for(var ent of entrada.split('')) {
    var st = state[ent]
    if (st) {
        console.log('Mudando para o estado: ', st)
        state = mudarState[st]
    } else {
        console.log('Não pode ir pra frente')
        break
    }
}

if (state === q0) {
    console.log('Cadeia aceita')
} else {
    console.log('Cadeia rejeitada')
}
