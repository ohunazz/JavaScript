// 1 //

//Write a program that calculates the area of a rectangle. Use let to declare the variables length and width, and then calculate the area. Next, try to change the length and width and calculate the area again. Then do the same thing using const and note what the difference is.

let length = 5;
let width = 10;

let area = length * width;
console.log(`The area of the rectangle is ${area}`);

// now change the length and width
length = 7;
width = 12;

area = length * width;
console.log(`The area of the rectangle is now ${area}`);

// repeat with const and observe the difference

const length1 = 5;
const width1 = 18;

const area1 = length1 * width1;
console.log(`The area of the rectangle is ${area1}`);

// now change the length and width const

// length1 = 5;
// width1 = 18;

// area1 = length1 * width1;
// // console.log(`The area of the rectangle is now ${area1}`); // It did'nt work with const

// 2 //

// Write a program that has a function declaration and a function expression. Try to call them before they're defined and observe what happens. Then, explain why it happened based on what you know about hoisting.

console.log(myFunctionDeclaration()); // what does this output? OUTPUT: This is a function declaration!

function myFunctionDeclaration() {
    return "This is a function declaration!";
}

// console.log(myFunctionExpression()); // what does this output? OUTPUT: TypeError: myFunctionExpression is not a function

var myFunctionExpression = function () {
    return "This is a function expression!";
};

// 3 //

// Write a program that declares variables with the same name in different scopes (global, function, and block scopes). Log the value of the variables in each scope and explain why each variable has its value.

var myVar = "I'm global!";

function someFunction() {
    var myVar = "I'm in function scope!";

    if (true) {
        let myVar = "I'm in block scope!";
        console.log(myVar); // what does this output?  OUTPUT: I'm in block scope!
    }

    console.log(myVar); // what does this output? OUTPUT: I'm in function scope!
}

someFunction();

console.log(myVar); // what does this output? OUTPUT: I'm global!
