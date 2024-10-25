let input = "ESCORpio"
let db = "escorpio"

console.log(input.toLowerCase())
console.log(input.touppercase())
console.log(input.toLowerCase()== db.tolowercase())
console.log(input.touppercase()== db.touppercase())

let str_1 = "hola soy la primera cadena"
let str_2 = "y yo say la segunda cadena"

console.log(str_1concat(" ", str_2))
console.timeLog(str_1 + " " + str_2)
console.log('$ {str_1} $ {str_2}')

let str_3 =  "hola soy un string con espacious al final"
console.log(str_3.length)
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)

let divisor_2 