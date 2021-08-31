var q0 = {
    'a': 'q1'
}

var q1 = {
    'a': 'q1',
    'b': 'q1',
    'c': 'q1'
}

var mudarState = {
    'q0': q0,
    'q1': q1
}

var entrada = 'ab'
var inicial = q0
var final = [q0,q1]

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
