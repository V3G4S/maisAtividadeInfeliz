
function soma(a, b) {
    return a + b
}

function ehPar(numero) {
    return numero % 2 === 0
}

function dobraValores(array) {
    return array.map(valor => valor * 2);
}

function contaCaracteres(str) {
    return str.length
}

function fatorial(n) {
    if (n < 0) return undefined
    if (n === 0 || n === 1) return 1
    let resultado = 1
    for (let i = 2; i <= n; i++) {
        resultado *= i
    }
    return resultado
}

console.log("Soma de 5 e 3:", soma(5, 3))

console.log("O número 4 é par?", ehPar(4))
console.log("O número 7 é par?", ehPar(7))

console.log("Valores dobrados:", dobraValores([1, 2, 3, 4]))

console.log("Número de caracteres em 'Olá, mundo!':", contaCaracteres("Olá, mundo!"))

console.log("Fatorial de 5:", fatorial(5))
console.log("Fatorial de 0:", fatorial(0))
console.log("Fatorial de 10:", fatorial(10))
