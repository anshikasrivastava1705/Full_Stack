function cube(n) {
    return (n*n*n);
}
console.log(cube(3));
// let n = parseInt(prompt("Enter a number"));
// alert (`The cube of the given number is ${cube(n)}`)

//---------------------------------------------------------

function isAdult(age) {
    if (age >= 18){
        return true;
    }
    else {
        return false;
    }
}
console.log(isAdult(19));
// let age = parseInt(prompt("Enter your age"));
// alert (`The person is adult : ${isAdult(age)}`);

function isadult(a) {
    return a>=18;
}
console.log(isadult(14));

//---------------------------------------------------------

function calculateBMI(weight,height) {
    return (weight / (height*height));
}
// let weight = parseFloat(prompt ("Enter your weight in kg :"));
// let height = parseFloat(prompt("Enter your height in m :"));
// alert (`Your BMI is : ${calculateBMI(weight,height)}`);
console.log(calculateBMI(45,1.65));

//---------------------------------------------------------

function gradeFromMarks(marks) {
    if (marks >= 90) {
        return ("A");
    }
    else if (marks >= 75) {
        return ("B");
    }
    else if (marks >= 50) {
        return ("C");    
    }
    else {
        return ("F");
    }
}
// let m = parseInt(prompt("Enter your marks :"));
// alert (`Your grade is : ${gradeFromMarks(m)}`);
console.log (gradeFromMarks(95));

//---------------------------------------------------------

function applyDiscount(price,ismember=false) {
    if (ismember === true) {
        let newprice = price - (price * 0.10);
        return newprice; 
    }
    else {
        return price;
    }
}
console.log (applyDiscount(500));
console.log (applyDiscount(500,true));

//---------------------------------------------------------

function countvowels(word) {
    let len = word.length;
    let count = 0;
    let i = 0
    while (i<len) {
        if (word[i] == "a" || 
            word[i] == "e" || 
            word[i] == "i" || 
            word[i] == "o" || 
            word[i] == "u") 
        {
            count++ ;
        }
        i++ ;
    }
    return count;
}
console.log (countvowels("banana"));