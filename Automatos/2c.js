var q0 = {
    'a': 'q1',
    'b': 'q2'
}

var q1 = {
    'a': 'q3',
    'b': 'q1'
}

var q2 = {}

var q3 = {
    'a': 'q3',
    'b': 'q2'
}

var mudarState = {
    'q0': q0,
    'q1': q1,
    'q2': q2,
    'q3': q3
}

var entrada = 'abb'
var inicial = q0
var final = [q1,q2]

var state = inicial
for(var ent of entrada.split('')) {
    var st = state[ent]
    if (st) {
        console.log('Mudando para o estado: ', st)
        state = mudarState[st]
    } else {
        console.log('Não pode ir pra frente')
        state = null
        break
    }
}

if (final.includes(state)) {
    console.log('Cadeia aceita')
} else {
    console.log('Cadeia rejeitada')
}
