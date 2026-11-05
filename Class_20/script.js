function square(n) {
    return n*n;
}
function cube(n) {
    return n*n*n;
}
function sumofSquareandCube (n) {
    return (square(n) + cube(n));
}
console.log(sumofSquareandCube(3));

//-----------------------------------------------------

function isPositive (n) {
    if (n>=0) {
        return true;
    }
    else {
        return false;
    }
}
function absolutevalue (n) {
        return (n)*(-1);
        //return Math.abs(n);
}
function safeSquareRoot(n) {
    if (isPositive(n)) {
        return Math.sqrt(n);
    }
    else {
        let a = absolutevalue(n);
        return Math.sqrt(a);
    }
}
console.log(safeSquareRoot(4));
console.log(safeSquareRoot(-16));

//-----------------------------------------------------

function findMax(arr) {
    let max = Number.NEGATIVE_INFINITY;
    //let max = -INFINITY
    let i = 0;
    while (i<(arr.length)) {
        if (arr[i]>max) {
            max = arr[i]
        }
        i++;
    }
    return max;
}
console.log(findMax([-9,-8,-7,-6]));
console.log(findMax([6, 7 ,8 , 9]));

//-----------------------------------------------------

const products = [
    { title: "Pen", price: 10 },
    { title: "Notebook", price: 45 },
    { title: "Bag", price: 500 }
];
function totalPrice(products) {
    let total = 0;
    let len = products.length;
    let i = 0;
    while (i<len) {
        const {price} = products[i];
        total = total + price;
        i++;
    }
    return total;
}
console.log(totalPrice(products));

//-----------------------------------------------------