const arr = [1,2,3,4,5]

const myGames = ["ELDEN RING", "SIFU", "GOW", "SKYRIM"]

//ARRAY METHODS

arr.push(6)
arr.pop()

arr.unshift(0)
arr.shift()

arr.includes(5)
arr.indexOf(5)
const newArr = arr.join()

// ADDS ALL ELEMENT OF ARRAY INTO STRING

console.log("A", arr);

const myn1 = arr.slice(1,3)
console.log(myn1);
console.log("B",arr);
const myn2 = arr.splice(1,3)
console.log(myn2);

