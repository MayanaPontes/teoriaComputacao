var q0 = {
    'a': 'q1',
    'b': 'q4',
    'c': 'q4'
}

var q1 = {
    'a': 'q2'
}

var q2 = {
    'a': 'q3'
}

var q3 = {
    'b': 'q3',
    'c': 'q3'
}

var q4 = {
    'a': 'q5',
    'b': 'q4',
    'c': 'q4'
}

var q5 = {
    'a': 'q6'
}

var q6 = {
    'a': 'q7'
}

var q7 = {}

var mudarState = {
    'q0': q0,
    'q1': q1,
    'q2': q2,
    'q3': q3,
    'q4': q4,
    'q5': q5,
    'q6': q6,
    'q7': q7
}

var entrada = 'bcaaa'
var inicial = q0
var final = [q3,q7]

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
