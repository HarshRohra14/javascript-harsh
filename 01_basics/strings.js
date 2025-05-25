const name = "harsh"
const repocount = 50

console.log(`my name is ${name} and my repocount is ${repocount}`);

const gameName = new String('ELDEN RING')

console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('D'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-9,4)
console.log(anotherString)

const name1 = "   harsh   "
console.log(name1.trim());

const url = "www.google.com"
console.log(url.replace('oo','--'))
console.log(url.includes('wwe'))