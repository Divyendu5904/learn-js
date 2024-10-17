// arrays

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Ben 10", "Kevin"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0])

myArr.push(6)
myArr.pop()
// console.log(myArr)

myArr.unshift(9)
myArr.shift()// no paramtere required 
// console.log(myArr)

// console.log(myArr.includes(9))  // provides boolean output
// console.log(myArr.indexOf(5))

const newArr = myArr.join()  // converts array into string
// console.log(newArr)

// SLICE , SPLICE

console.log("A ", myArr)

const myn1 = myArr.slice(1,3)

console.log(myn1)
console.log("B ", myArr)


const myn2 = myArr.splice(1,3)  // splice array ki aisi ki taisi krdeta h jitne elements splice hone ke bd bch jate h wo hi print hote h bs
console.log(myn2)
console.log("C ", myArr)