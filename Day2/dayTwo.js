//Exercise One

//1
let challenge = '30 Days of JavaScript';

//2
console.log(challenge);
//3
console.log(challenge.length);
//4
console.log(challenge.toUpperCase());
//5
console.log(challenge.toLocaleLowerCase());
//6
console.log(challenge.substr(3, 4));
console.log(challenge.substring(3, 7));
//7
console.log(challenge.substring(3, 21));
//8
console.log(challenge.includes('Script'));
//9
console.log(challenge.split());
//10
console.log(challenge.split(' '));
//11
let companyNames = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(companyNames.split(', '));
//12
console.log(challenge.replace('30 Days of JavaScript','30 Days of Python'));
//13
console.log(challenge.charAt(15));
//14
console.log(challenge.charCodeAt('J'));
//15
console.log(challenge.indexOf('a'));
//16
console.log(challenge.lastIndexOf('a'));
//17
let sentence = "Vous ne pouvez pas terminer une phrase par parce que parce que parce que c'est une conjonction"
console.log(sentence.indexOf('parce que'));
//18
console.log(sentence.lastIndexOf('parce que'));
//19
console.log(sentence.search('parce que'));
//20
console.log(challenge.trim());
//21
console.log(challenge.startsWith('30 Days'));
//22
console.log(challenge.endsWith('JavaScript'));
//23
console.log(challenge.match('a'));
//24
let firstWord = '30 Days of'
let secondWord = 'JavaScript'
console.log()
//25



//Exercise Two

//1
let content = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(content);
//2
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
//3
let numberTenString = '10'
let numberTen = 10

/*if(numberTen !== numberTenString){
    numberTenString = 10
} */

numberTen === numberTenString ? console.log('ils sont déjà équivalents') : numberTenString = 10;
console.log(numberTenString)
//4
let str = '9.8'
let parseNumber = parseFloat(str)
let number = Math.round(parseNumber)
str === 10 ? console.log('Compatibilité') : str = number;
console.log(str);
//5
let searchWord = 'on'
let Python = 'Python'
let jargon = 'jargon'

verify = Python.includes('on') === jargon.includes('on')

console.log(verify);
//6
let sentenceTwo = "J'espère que ce cours n'est pas plein de jargon"
let verifyTwo = sentenceTwo.includes('jargon')

console.log(verifyTwo);
//7
let randomNumber = Math.floor(Math.random()*101) 
console.log(randomNumber);
//8
let randomNumberTwo = Math.floor(Math.random() * 51) + 50;
console.log(randomNumberTwo);
//9
let randomNumberThree = Math.floor(Math.random() * 256);
console.log(randomNumberThree);
//10
let newWord = 'JavaScript'
let lengthNewWord = newWord.length
let randomNewWord = Math.floor(Math.random() * lengthNewWord)
console.log(newWord[randomNewWord])
//11


//12
let sentenceThree = 'Vous ne pouvez pas terminer une phrase avec parce que parce que parce que c\'est une conjonction'
let subsSentenceThree = sentenceThree.substring(44, 73).trim();

console.log(sentenceThree.replace(subsSentenceThree, ""));

