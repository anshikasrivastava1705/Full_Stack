const fruitsArr = ["Mango", "Grapes"];
console.log(fruitsArr);

const fruitsObj = {
    0 : "Mango",
    1 : "Grapes"
};
console.log(fruitsObj);

console.log(typeof fruitsArr);
console.log(typeof fruitsObj);

//-------------------------------------------------------

console.log(fruitsArr[0]);
console.log(fruitsArr[1]);
console.log(fruitsArr.length);
console.log(fruitsArr[fruitsArr.length - 1]);
console.log(fruitsArr[-1]);

//-------------------------------------------------------

fruitsArr[2] = "Apple";
console.log(fruitsArr);

fruitsArr[20] = "Watermelon";
console.log(fruitsArr);
console.log(fruitsArr.length);

//-------------------------------------------------------

fruitsArr.unshift("Watermelon");
fruitsArr.push("Banana");
console.log(fruitsArr);

fruitsArr.shift();
fruitsArr.pop();
console.log(fruitsArr);

// delete fruitsArr[1];
console.log(fruitsArr);
console.log(fruitsArr.length);

fruitsArr[1] = "Orange";
console.log(fruitsArr);

//-------------------------------------------------------

fruitsArr.push("Grapes", "Watermelon");
console.log(fruitsArr);
fruitsArr.splice(2, 1);
console.log(fruitsArr);
fruitsArr.splice(1, 2);
console.log(fruitsArr);

fruitsArr.splice(1, 0, "Kiwi");
console.log(fruitsArr);
fruitsArr.splice(2, 0, "Guava", "Papaya");
console.log(fruitsArr);

fruitsArr.splice(0, 1, "Pineapple");
console.log(fruitsArr);

//-------------------------------------------------------

const fruitsArr2 = fruitsArr;
fruitsArr2.push("Cherry");
console.log(fruitsArr);
console.log(fruitsArr2);
