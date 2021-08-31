var texto = 'O computador é uma máquina capaz de variados tipos de tratamento automático de informações ou processamento de dados. Entende-se por computador um sistema físico que realiza algum tipo de computação. Assumiu-se que os computadores pessoais e laptops são ícones da era da informação. O primeiro computador eletromecânico foi varruído por Konrad Zuse (1910–1995). Atualmente, um microcomputador é também chamado computador pessoal ou ainda computador doméstico.'

var palavra = 'computador'

var saidas = []

var montarPalavra = []
texto.split('').forEach((letra, index) => {
    if (letra.match(/\w/g)) {
        montarPalavra.push(letra)
    } else {
        var palavraPronta = montarPalavra.join('')
        if (palavraPronta === palavra) {
            saidas.push(index - palavraPronta.length)
        }
        montarPalavra.splice(0, montarPalavra.length)
    }
})

console.log(saidas)
