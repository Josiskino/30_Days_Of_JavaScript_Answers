//Exercice One 

//1
let firstName = 'John'
let lastName = 'KOUDA'
let contry = 'TOGO'
let city = 'LOME'
let age = 45
let isMarrried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof contry)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarrried)

//2
let numberOne = '10'
let numberTwo = 10

console.log(typeof numberOne === typeof numberTwo)

//3

let numberThree = '9.8'
let parseNumberThree = parseInt(numberThree)
console.log(typeof numberThree === typeof parseNumberThree)

//4

console.log(3 > 2)
console.log(3 >= 2) 
console.log(2 <= 3)
console.log(3 != 3)
console.log(3 !== 3)
console.log(0 === false)

//5
true 
true
false
false
true
true
false
false
false
true
false

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let py = 'python'
let jar = 'jargon'
console.log(py.length !== jar.length)

//6
true
false
true
true
false
true
true
false
true
true

let drag = 'dragon'.includes('on')
let pyth = 'Python'.includes('on')

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log(drag !== pyth)

//7

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//Exercise Two

//1
let base = parseInt(prompt('Enter base: '))
let height = parseInt(prompt('Enter height: ')) 
const area = (0.5 * base * height)
console.log(`The area of triangle is ${area}`)

//2
let a = parseInt(prompt('Enter side a: '))
let b = parseInt(prompt('Enter side b: '))
let c = parseInt(prompt('Enter side c: '))
const perimeter = (a + b + c)
console.log(`The perimeter of the triangle is ${perimeter}`)

//3
let long = parseInt(prompt('Enter la longeur: '))
let larg = parseInt(prompt('Enter la largeur: '))
const rectangleArea = (long * larg)
const rectanglePerimeter = (2 * (long + larg))
console.log(`l'aire du rectangle est ${rectangleArea} et son périmètre est ${rectanglePerimeter}`)

//4
const pi = 3.14
let rayon = parseInt(prompt('entrer le rayon: '))
const circleArea = (pi * rayon * rayon)
const circleCirconf = (2 * pi * rayon)
console.log(`le rayon du cercle est: ${circleArea} et sa circonférence est de ${circleCirconf}`)

//5
let x = parseInt(prompt('Entrer x: '))
const y = (2 * x - 2)
console.log(`La pente est y=${y}`)

//6
let x1 = parseInt(prompt('Entrer X1: '))
let x2 = parseInt(prompt('Entrer X2: '))
let y1 = parseInt(prompt('Entrer Y1: '))
let y2 = parseInt(prompt('Entrer Y2: '))
const m = (y2-y1)/(x2-x1)
console.log(`la pente des coordonnées entrés est: ${m}`)

//7
console.log(y === m)

//8


//9
let hours = parseInt(prompt('Enter hours: '))
let rate = parseInt(prompt('Enter rate pers hours: '))
const weeklyEarning = rate * hours
console.log(`Your weekly earning is ${weeklyEarning}`)

//10
let herName = prompt('Enter your name: ')

herName.length > 7 ? console.log('votre nom est long') : console.log('votre nom est court')

//11
