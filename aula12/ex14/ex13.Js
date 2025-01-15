var hora = new Date()
var hora = hora.getHours()
console.log(`Agora são extamente ${hora} horas`)
if (hora <=12 ){
    console.log('Bom dia')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log ('boa noite')
}
