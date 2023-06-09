const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// Adicionar Elementos
// push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// remover elementos 
// pop
let = ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift 
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar por um elemento
//includes 
const inclui = arr.includes("Gandalf")
console.log(inclui)

//index0f
const indice = arr.indexOf("Gandalf")
console.log(indice)

//cortar e concatenar
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

//concat
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)

// Substituição dos elementos
//splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

//iterrar sobre os elementos 
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice] 
    console.log(elemento + " se encitra na posição " + indice)
}