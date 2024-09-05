const name="divyam"
const repoCount= 10

// console.log(name + repoCount + "value")
// old way of represting with varibales and concatenate

console.log(`hello my name is ${name} and my repocount is ${repoCount}`)
//modern way 

const gameName= new String('divyam')
console.log(gameName)
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))

console.log(gameName.indexOf('y'))

const newString= gameName.substring(0,4)
console.log(newString)

const anotherString= gameName.slice(-5,4)
console.log(anotherString)

const newStringOne="  divyam  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url= "https://divyam.com/god%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('divyam'))
console.log(url.includes('kumar'))

