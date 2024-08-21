
function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2)
}

function soma(a, b) {
    return a + b
}

function multiplicacao(a, b) {
    return a * b
}

let resultadoSoma = executaOperacao(5, 3, soma)
console.log("Resultado da soma:", resultadoSoma)

let resultadoMultiplicacao = executaOperacao(5, 3, multiplicacao)
console.log("Resultado da multiplicação:", resultadoMultiplicacao)

function repetirOperacao(numero, operacao) {
    let resultado = 1
    for (let i = 1; i <= numero; i++) {
        resultado = operacao(resultado, i)
        console.log(`Resultado após iteração ${i}:`, resultado)
    }
}

repetirOperacao(5, multiplicacao)

function contarOcorrencias(str, char) {
    let contagem = 0
    str.split('').forEach(c => {
        if (c === char) {
            contagem++
        }
    })
    return contagem
}

let ocorrencias = contarOcorrencias("abracadabra", 'a')
console.log("Número de ocorrências do caractere 'a':", ocorrencias)
