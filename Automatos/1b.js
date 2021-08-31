var q0 = {
    a: 'q1',
    b: 'q2'
}

var q1 = {
    a: 'q0',
    b: 'q1'
}

var q2 = {
    a: 'q1',
    b: 'q2'
}

var mudarState = {
    'q0': q0,
    'q1': q1,
    'q2': q2
}

var entrada = 'baa'
var inicial = q0
var final = q2

var state = inicial
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

if (state === final) {
    console.log('Cadeia aceita')
} else {
    console.log('Cadeia rejeitada')
}
