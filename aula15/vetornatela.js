let valores = [8, 4, 3, 7, 4, 2]
valores.sort()
//console.log(valores)
/* forma simples de fazer
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/* forma padrão de fazer
for(let pos =0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} temo o valor ${valores[pos]}`)
}
*/

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

}