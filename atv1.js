
let texto = "Aprendendo JavaScript é divertido e recompensador!"

let textoMaiusculas = texto.toUpperCase()
console.log(textoMaiusculas)

let contemDivertido = texto.includes("divertido")
console.log(contemDivertido)

let palavrasArray = texto.split(" ")
console.log(palavrasArray)

let textoComHifens = palavrasArray.join("-")
console.log(textoComHifens)
