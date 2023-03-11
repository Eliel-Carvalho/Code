const fruts = ["banana", "uva", "pera"]

const banana1 = fruts[0]
//console.log(banana1) //forma tradicional


//DESESTRUTURAÇÃO
const [,banana, pera] = fruts
console.log(banana, pera)

const [, uva, ...rest] = fruts
console.log(rest)