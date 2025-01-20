function parimpar (n) {
    if (n%2 == 0) { // Se o Número (n) for dividido por 2 (der resultado 0)
        return 'Par!!' // retorne Par
    } else {
        return 'Ímpar!'
    }

} let res = parimpar(223) // a variável (let) resultado (res) recebeu 4
    console.log (res)