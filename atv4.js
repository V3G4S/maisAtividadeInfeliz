
let nulo = null

let igualUndefined = nulo == undefined
let estritamenteIgualUndefined = nulo === undefined
console.log("nulo é igual a undefined (com ==):", igualUndefined)
console.log("nulo é estritamente igual a undefined (com ===):", estritamenteIgualUndefined)

let indefinido

let indefinidoNaN = isNaN(indefinido)
console.log("indefinido é NaN:", indefinidoNaN)

let numStr2 = "123abc"
let resultadoConversao = Number(numStr2)
let resultadoNaN = isNaN(resultadoConversao)
console.log("Resultado da conversão de '123abc':", resultadoConversao)
console.log("Resultado é NaN:", resultadoNaN)
