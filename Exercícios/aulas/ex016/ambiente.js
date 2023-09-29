let num = [5, 7, 9, 3,]
//a ordem influencia no resultado
num.push(1)
num.sort()
console.log(num)
console.log(num[2]) //O 5 será o segundo por causa do push1 //[indica a posição no vetor]
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[1]}`) //começa a contar do 0

let pos= num.indexOf(11) //Buscar um valor.
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 3 está na posição ${pos}`)
}
