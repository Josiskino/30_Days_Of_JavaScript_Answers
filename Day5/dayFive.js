//Exercise One

//1
let emptyArray = []

//2
let fiveContentsArray = [1, 'qui nous somme', 2, 3, 5, 6]

//3
console.log(fiveContentsArray.length)

//4
let firstElement = fiveContentsArray[0]
console.log(firstElement)

let lengthArray = fiveContentsArray.length
let middleLenght = (lengthArray / 2)
let middleElement = fiveContentsArray[middleLenght]

console.log(middleElement)

//5
let mixedDataTypes = [
    'Orange', 
    'Kasava', 
    404, 
    {
        firstName: 'Gervai',
        lastName: 'Djondo',
        isMarried: true,
    },
    NaN,
    'lastElement'
]
console.log(mixedDataTypes)

//6
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//7
console.log(itCompanies)

//8
console.log(itCompanies.length)

//9
let lastIndexItCompanies = itCompanies.length - 1
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[lastIndexItCompanies])

//10

//11
let itCompaniesToString = itCompanies.toString()
let moveUpper = itCompaniesToString.toUpperCase()
let arrNew = moveUpper.split(' ').toString()
console.log(arrNew)

//12
let companiesContent = itCompanies.slice(0, itCompanies.length-1).toString()
let lastIndexItCompaniesToString = itCompanies[lastIndexItCompanies].toString()
//console.log(companiesContent)
console.log(`${companiesContent} et ${lastIndexItCompaniesToString} sont de grandes sociétés informatiques.`) 

//13
let searchCompany = 'Amazon'
if (itCompanies.includes(searchCompany)) {
     console.log(searchCompany)
} else {
    console.log('Entreprise Introuvable')
}

//14


//15
let sortCompanies = itCompanies.sort()
console.log(sortCompanies)

//16
console.log(sortCompanies.reverse())

//17
console.log(itCompanies.slice(0,3))

//18
console.log(itCompanies.slice(4))

//19

//20
deleteFirstElement = itCompanies.shift()
console.log(itCompanies)

//21

//22
deleteLastElement = itCompanies.pop()
console.log(itCompanies)

//23
deleteAllCompanies = itCompanies.splice()
console.log(deleteAllCompanies)

//Exercice Two

//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

text.replace('.', ' ,')
console.log(text)

textArray = text.split(' ')
console.log(textArray)
console.log(textArray.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
const addingWord = 'viande'
//const likeHoney = true

if (!shoppingCart.includes(addingWord)) {
    shoppingCart.unshift(addingWord)
    console.log(shoppingCart)
}

shoppingCart.push('sucre')
console.log(shoppingCart)
//je suspens ce code provisoirement...
const likeHoney = (answer) = {
    
    if (answer) {
        
    }
}

//A revoir également
const modif = shoppingCart.toString(' ').replace('Tea', 'Green Tea').split(' ,')
console.log(modif)

//Exercice Three

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
const copyAges = [...ages]
console.log(copyAges)

const sortAges = copyAges.sort((a, b) => a - b)
console.log(sortAges)

const minAge = sortAges[0]
const maxAge = sortAges[sortAges.length - 1]

console.log(`l'age minimim est: ${minAge} et l'age maximum est: ${maxAge}`)

//2
const agesArrayLenght = sortAges.length
const middleLenghtArray = Math.floor(agesArrayLenght / 2)
console.log(`la longeur du tableau d'age est ${agesArrayLenght}`)
console.log(`l'index du millieu du tableau est ${middleLenghtArray}`)

if (agesArrayLenght % 2 !== 0 ) {
    //middle lenght is impair
    console.log("l'index de l'age est impair")
    console.log(sortAges[middleLenghtArray])
} else {
    console.log("l'index de l'age est pair")
    console.log((sortAges[middleLenghtArray-1] + sortAges[middleLenghtArray])/2)
}

//3
const sumAgeArray = sortAges.reduce((acc, num) => {
    return acc += num
}, 0)

const averageAgeArray = Math.floor(sumAgeArray / agesArrayLenght)

console.log(sumAgeArray)
console.log(`la moyenne d'age est: ${averageAgeArray} ans`)

const plageAge = (maxAge-minAge)
console.log(`La plage des ages est: ${plageAge}`)

const AbsComp1 = Math.abs(minAge - averageAgeArray)
const AbsComp2 = Math.abs(maxAge - averageAgeArray)

AbsComp1 > AbsComp2 ? 
        console.log(`${AbsComp1} > ${AbsComp2}`)
    :   console.log(`${AbsComp1} < ${AbsComp2}`)

//console.log(`AbsComp1 est egale à: ${AbsComp1} et AbsComp2 est égale à: ${AbsComp2}`)

