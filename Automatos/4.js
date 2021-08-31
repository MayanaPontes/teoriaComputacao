var listaMoedas = [25, 50, 100, 100, 25]

var totalMoedas = 0

function calcularDinheiro(moeda) {
    console.log('Adicionou', moeda)
    totalMoedas += moeda
    if (totalMoedas >= 100) {
        totalMoedas -= 100
        console.log('Refrigerante saindo')
    } else {
        console.log('Refrigerante indisponível')
    }
    console.log('Total moeda', totalMoedas)
}

listaMoedas.forEach(calcularDinheiro)
