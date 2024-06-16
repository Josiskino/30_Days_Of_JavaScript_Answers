const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    //'Togo'
  ]
  
const country = 'Ethiopia'
const containCountry = countries.includes(country)  
const containCountryPos = countries.indexOf(country)
console.log(containCountryPos)
console.log(containCountry)

if (containCountry) {
    console.log(countries[containCountryPos])
}else {
    countries.push(country)
    console.log(countries)
}

//Exercice Three

//2
const contriesLenght = countries.length
const middleCountryIndex = Math.floor(contriesLenght / 2)

//console.log(middleCountryIndex)

if (contriesLenght % 2 !==0) {
    console.log('index des pays impair')
    console.log(countries[middleCountryIndex])
} else {
    console.log('index des pays pair')
    console.log(countries[(middleCountryIndex-1)], countries[middleCountryIndex])
}

//3
