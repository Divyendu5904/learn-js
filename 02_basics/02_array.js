const benAF_heros   =  ["swampfire", "bigchill", "jetray"]
const ben10_heros   =  ["fourarms", "canonbolt", "diamondhead"]

// benAF_heros.push(ben10_heros)  // takes any data type as a single element of the array


// console.log(benAF_heros)
// console.log(benAF_heros[3][1])

const allHero = benAF_heros.concat(ben10_heros)
// console.log(allHero)   combines two arrays

const all_hero = [...benAF_heros,...ben10_heros]
// console.log(all_hero)     this is called as spread function

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


// console.log(Array.isArray("Divyam"))  // gives a boolean output

// console.log(Array.from("Divyam"))  // converts into array

// console.log(Array.from({name:"Divyam"}))  // interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3))