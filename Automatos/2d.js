var q0 = {
    'a': 'q1',
    'b': 'q0'
}

var q1 = {
    'a': 'q1',
    'b': 'q0',
    'c': 'q2'
}

var q2 = {
    'c': 'q2'
}

var mudarState = {
    'q0': q0,
    'q1': q1,
    'q2': q2
}

var entrada = 'abac'
var inicial = q0
var final = [q1,q2]

var state = inicial
for(var ent of entrada.split('')) {
    var st = state[ent]
    if (st) {
        console.log('mudando para o estado: ', st)
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
