let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate)
let myCreatedDate = new Date(2005,7,3)
console.log(myCreatedDate.toDateString())
// FORMATT
// (year,month(starts from zero),date,hours,minutes)

// (2004-08-14) agar ese likha to not needed start from 0

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

// 16 and 17 line ko compare kiya hai time created date se abtak ka time op ayga ms pe l-18 pe s me ayga
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // starts from 0 
console.log(newDate.getDay());
console.log(newDate.getTime());


newDate.toLocaleString('default', {
    weekday: "long",
    
})