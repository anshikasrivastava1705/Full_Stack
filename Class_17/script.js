// takes the input from the browser
// let username = prompt();

//displays the output on the browser
// alert (username);

// let age = prompt ("Type in your age:");
// alert (`Your age is ${age}`);
// console.log ("Your age is", age);

//-------------------------------------------

//Number() method
let age = prompt ("What is your age?");
age = Number(age)
console.log(age)
console.log (typeof age);


//parseInt() method
let weight = prompt("What's your weight?");
let weight_int = parseInt(weight);
console.log (weight_int)
console.log (weight);
console.log(`Your weight is ${weight_int} kg.`);


//parseFloat() method
let pi = prompt("Enter the value of pi?");
let pi_dec = parseFloat (pi);
console.log (pi_dec);
console.log (pi);
console.log(typeof pi_dec);
console.log (`The value of pi is ${pi_dec} `);

//-------------------------------------------

//Math functions
console.log (Math.round(43.2323));
console.log (Math.ceil (23.115));
console.log (Math.floor (27.9999));
console.log (Math.min (96, 96.4, 75.8, 82, 86));
console.log (Math.max (96, 96.4, 75.8, 82, 86));
