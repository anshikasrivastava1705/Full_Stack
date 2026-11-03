// function greet() {
//     console.log ("Hello, everyone!");
// }
// greet();


// function hi(user) {
//     console.log (`Hi, ${user}!`);
// }
// hi ("Ajay");
// hi ("Vijay")
// hi ();

//-----------------------------------------------

// console.log("START")
// function printPrice(item,usd) {
//     const inr = Math.round(usd * 100);
//     console.log (`${item}: ${inr}`);
// }
// printPrice("Honey Jar", 6.99);
// printPrice("Kiwi", 2.49);
// console.log("END");

//-----------------------------------------------

// function add(a,b) {
//     console.log(a+b);
// }
// let result = add(2,3);
// console.log(result);
// console.log(add(10,20)* 2);

function sum(a,b) {
    return a+b ;
}
let answer = sum(2,3);
console.log(answer);
console.log(sum(10,20)* 2);

//-----------------------------------------------

function check() {
    return "done";
    console.log("Will this print?");
}
console.log(check());

//-----------------------------------------------

// function introduce(uname, city) {
//     console.log(`${uname} lives in ${city}`);
// }
// introduce("Ajay");


"use strict";
function greet(uname="Anshika", city="Lucknow") {
    console.log(`${uname} lives in ${city}`);
}
greet();
greet("Vijay");
greet(undefined, "Gurgaon");