
let proximoAniversario = new Date(2024, 9, 10)

let dataAtual = new Date()

let diffTempo = proximoAniversario - dataAtual
let diffDias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24))
console.log("Diferença em dias até o próximo aniversário:", diffDias)

function formatarData(data) {
    let ano = data.getFullYear()
    let mes = String(data.getMonth() + 1).padStart(2, '0')
    let dia = String(data.getDate()).padStart(2, '0')
    return `${ano}-${mes}-${dia}`
}
console.log("Data atual formatada:", formatarData(dataAtual))

let novaData = new Date(dataAtual)
novaData.setDate(dataAtual.getDate() + 30)
console.log("Data atual + 30 dias:", formatarData(novaData))