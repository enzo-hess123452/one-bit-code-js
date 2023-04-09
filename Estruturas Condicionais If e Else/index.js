const resultado = (6 === 6) ? "verdadeiro" : "falso"
console.log(resultado) 

const idade = prompt("Informe a dua idade: ")

if (idade >= 18)  {
    alert("vc e maior de idade")
} else if (idade > 12){
    alert("vc e menor de idade")

} else if (idade > 4) {
    alert("voce e criança")
} else {
    alert("..")
}