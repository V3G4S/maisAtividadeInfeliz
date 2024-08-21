
let x = 8
let y = 12
let z = 8

let maiorOuIgual = x >= y
console.log("x é maior ou igual a y:", maiorOuIgual)

let diferente = x != z
let estritamenteDiferente = x !== z
console.log("x é diferente de z (com !=):", diferente)
console.log("x é estritamente diferente de z (com !==):", estritamenteDiferente)

let condicao1 = (x < y) && (z > x);
console.log("x é menor que y e z é maior que x:", condicao1)

let condicao2 = (x === z) || (y < z)
console.log("x é igual a z ou y é menor que z:", condicao2)