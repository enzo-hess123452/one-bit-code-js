const atacante = prompt("Qual é o nome do personagem atacante?")
const podeDeAtaque = prompt("Qual é o seu poder de ataque?")

const defesor = prompt("Qual é o nome do personagem defensor?")
let pontosDeVida = prompt("Quantos pontos de vida ele possui?")
const poderDeDefesa = prompt("Qual é o poder de defesa?")
const possuiEscudo = prompt("Ele possui um escudo? (sim/não)")

let danoCausado = 0

if (podeDeAtaque > poderDeDefesa && possuiEscudo === "não") {
    danoCausado = podeDeAtaque - poderDeDefesa
} else if (podeDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
    danoCausado = (podeDeAtaque - poderDeDefesa) /2
} 

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + "pontos de dano em " + defesor) 
alert(
    atacante + "\nPoder de ataque: " + podeDeAtaque + "\n\n" +
    defesor + "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)