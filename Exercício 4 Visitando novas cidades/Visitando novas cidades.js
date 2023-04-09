const turista = prompt("E ai, turista! Qual é o seu nome?")
let cidade = ""
let contagem = 0

let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")

while (continuar === "Sim") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
    // cidades = cidades + ...
    cidade += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você vistou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contagem +
    "\nCidades visitadas:\n" + cidade
)