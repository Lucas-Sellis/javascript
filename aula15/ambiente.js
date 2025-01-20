let num = [5,8,2,9,3]
num.push(1) //Utilizado para iserir o numero 1 na variavel acima após o 3 caso queira acrescentar numeros.
num.sort() //Utilizado para Organizar os valores dentro da variavel num acima
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //A variavel tem tantos numeros/posições.......
let pos = num.indexOf(3) // busca o numero na posição do vetor, por exemplo: ele encontrou o 2 pois a sequência vem 0,1,2
if (pos == -1){ // Se ele nao encontrar o valor......
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor esta na posição ${pos}`)
}