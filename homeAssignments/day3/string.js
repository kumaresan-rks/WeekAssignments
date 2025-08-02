let s= "Hello World"
let words = s.split(' ')
let lastWord = words[words.length-1]
let lastWordLength = lastWord.length

console.log(`last word length is `, lastWordLength);
console.log(`last word is `, lastWord);

let A = " fly me to the moon "
let sentenceTrim = A.trim()
let wordsSplit = sentenceTrim.split(/\s+/)
let lastWordA = wordsSplit[wordsSplit.length-1]
let lengthofLastWord = lastWordA.length

console.log(`last word length is `, lengthofLastWord);
console.log(`last word is `, lastWordA);