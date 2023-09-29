/*let valores = [ 1, 4, 7, 8, 6, 3, 2, 9]
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

let valores = [1, 4, 7, 8, 6, 3, 2, 9]
console.log(valores)
valores.sort() //colocar a variavel em ordem

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}