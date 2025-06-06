// ***********************NUMBERS**********************************

const score = 400
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// *****************************MATHS*****************************

console.log(Math);
console.log(Math.abs(4));
console.log(Math.abs(-4));

console.log(Math.round(4.7));
console.log(Math.ceil(4.7));
console.log(Math.floor(4.7));
console.log(Math.min(4.7,5,7,8,1)); //same for max
console.log(Math.random());

// Example Operation

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1)+min)));

// ye islie kiya jese min value iski 10 ani hi chhahiye