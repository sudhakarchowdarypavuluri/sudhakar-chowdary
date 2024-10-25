//methods most used with strings of characters
//how to get the length of a strings
let str = "hola say un string";
console.log(str.lenght)

//get parts obtained from characters
//slice()substring()substring()
let slice_str = str.slice(5,10)
console.log(slice_str)

let substring_str = str.substring(5,10)
console.log(substring_str)

let substr_str = str.substr(5,10)
console.log(substring_str)

//replace the content with one serving of test material
let cadena = "hola mi nambre es gorka"
console.log(cadena)

//when using strings only replace the frist instance
console.log(cadena.replace('gorka',"miguel"))

let texto_largo = "tito is not a mono cualquier A tito doesn't like climbing trees and hates eating"

//when using strings only replace the frist instance
console.log(text_large.replace ('gorka', 'cinco'))

//when using the regular expression/g(global),replace all instances
console.log(text_large.replace(/gorka/g, 'cinco'))