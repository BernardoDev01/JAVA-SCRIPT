function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}
//Chamada para executar a função
let res = parimpar(4) 
console.log(res)
//ou assim, sem a variável. 
console.log(parimpar(223))