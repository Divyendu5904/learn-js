// primitive 
// 7 types: string, number, boolean, null, undefined, symbol, bigInt

const score =100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=false
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')



//reference(non primitive)
// array, objects, functions


const heroes=["shaktimaan","ben 10"]
let myObj={
    name:"divyam"
}






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive), heap(non primitive)

let myYoutubeName= "BROTHERHOOD GAMING"

let anotherName= myYoutubeName

anotherName= "divyendu"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo= userOne

userTwo.email= "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)