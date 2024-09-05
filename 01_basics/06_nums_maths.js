const score =400
// console.log(score)

const balance = new Number(100)
// console.log(balance)
// console.log(balance.toString().length)
// console.log(balance.toFixed(2)) // provides precision or decimal values or 0s

const otherNumber= 23.9866
// console.log(otherNumber.toPrecision(3)) // rounds off and make a number in string

const hundreds= 1000000
// console.log(hundreds.toLocaleString()) // gives number with commas in betwween..... also according to us standards
// console.log(hundreds.toLocaleString('en-IN')) // gives in indian value



//++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2)) // slight greater than that no. means another no.
// console.log(Math.floor(4.9))// slight lesser than taht no. means same no.


console.log(Math.random())
console.log((Math.random()*10) +1)
console.log(Math.floor(Math.random()*10) +1)

const min =10
const max =20

console.log(Math.floor(Math.random() *(max - min +1)) + min)   // important formula