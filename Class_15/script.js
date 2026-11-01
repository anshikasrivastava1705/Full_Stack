const student = { name_i: "Ajay", age: 20, rollNumber: "2616400901" };
const { name_i, age } = student;
console.log(name_i, age);

const { rollNumber, city } = student;
console.log(rollNumber, city);

// -------------------------------------------------------

// const fruits = ["Apple", "Banana", "Mango"];
// const [first, second] = fruits;
// console.log(first, second);

// const { n, a } = student;
// console.log(n, a);
// const [x, y] = fruits;
// console.log(x, y);

// -------------------------------------------------------

const s1 = { name: "Ajay" };
const s2 = { name: "Ajay" };
const s3 = s1;
console.log(s1 == s2);
console.log(s1 == s3);
console.log(s1 === s2);
console.log(s1 === s3); 

// -------------------------------------------------------

// console.log([1, 2] === [1, 2]);
// console.log([1, 2] == [1, 2]);

// -------------------------------------------------------

// console.log([5] == 5);
// console.log([5] === 5);
// console.log([1, 2] == "1,2");