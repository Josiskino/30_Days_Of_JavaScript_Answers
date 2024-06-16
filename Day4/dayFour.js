//exercise One

const legalAge = 18
let age = parseInt(prompt('Enter your age: '))
const waitingAge= legalAge - age

if (age >= legalAge) {
    console.log('You are old enough to drive')
}else{
    console.log(`You are left with ${waitingAge} years to drive`)
}

//2
const myAge = 20
let yourAge = parseInt(prompt('Enter your age'))

if (yourAge > myAge) {
    let diff = yourAge - myAge
    console.log(`You are ${diff} years older than me`)
} else {
    diff = myAge - yourAge
    console.log(`I have ${diff} years older than you`)
}

//3
const a = 4
const b = 3

/*if (a > b) {
    console.log(`${a} is greater than ${b} `)
} else {
    console.log(`${b} is greater than ${a}`)
}*/

a > b ? console.log(`${a} is greater than ${b} `) : console.log(`${b} is greater than ${a}`)

//4
let number = parseInt(prompt('Enter a number: '))
const remainder = number % 2
//console.log(remainder)
remainder === 0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`)


//Exercise Two

//1
let note = parseInt(prompt('Entrer votre score: '))

switch (true) {
    case note <= 100 && note >= 80 :
        console.log('UN')
        break;
    case note < 80 && note >= 70 :
        console.log('B')
        break;
    case note < 70 && note >= 60 :
        console.log('C')
        break; 
    case note < 60 && note >= 50 :
        console.log('D')
        break; 
    case note < 50 && note >= 0 :
        console.log('F')
        break; 
    default:
        console.log('Vous avez entré un mauvais score !! ')
        break;
}

//2
let month = prompt('Enter the month: ').toLocaleLowerCase()

switch (true) {
    case month === 'Septembre' || month === 'Octobre' || month === 'Novembre':
        console.log('Vous ete en automne')
        break;
    case month === 'décembre' || month === 'janvier' || month === 'février':
        console.log('Vous ete en hiver')
        break;
    case month === 'mars' || month === 'avril' || month === 'mai':
        console.log('Vous ete au primtemps')
        break;
    case month === 'juin' || month === 'juillet' || month === 'aout':
        console.log('Vous ete en  été')
        break;

    default:
        console.log('La saisie du mois est incorrect')
        break;
}

//3
let day = prompt('Entrer le jour: ').toLowerCase()

switch (true) {
    case day === 'samedi' || day=== 'dimanche':
        console.log(`${day} is weekend`)
        break;
    case ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi'].includes(day):
        console.log(`${day} is working day`)
        break;
    default:
        console.log(`${day} n'est pas un jour de la semaine`)
        break;
}


//Exercise 3

let monthVerification = prompt('Entrer le mois: ')
let now = new Date()
