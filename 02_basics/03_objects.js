// singleton

// objects literals

Object.create // it is made through constructor and singleton method is formed

const mySym = Symbol("key1")

const JsUser = {
    name:"Divyam",
    // mySym : "mykey1",   // yet the datatype would not be an symbol
     [mySym] : "mykey1", // after sqr brackets its data type will be a symbol
    age:20,
    location:"Delhi",
    email:"divyam10@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]

}


// console.log(JsUser.email) // old method
// console.log(JsUser["email"]) // new method
// console.log(JsUser[mySym])

JsUser.email = "divyam@chatgpt.com"

// Object.freeze(JsUser) // freezes the details inside object no further changes will be applied

JsUser.greeting = function (){
    console.log("hello js user")
}

JsUser.greetingTwo = function (){
    console.log(`hello js user,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
