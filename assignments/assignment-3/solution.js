// Basic Arithmetic Operations //

var num1 = 15;
var num2 = 5;

var add = num1 + num2;
console.log(add);
var sub = num1 - num2;
console.log(sub);
var multip = num1 * num2;
console.log(multip);
var divide = num1 / num2;
console.log(divide);

// Temperature Converter //

// var fahrenheit = 110;
// var celsius = (fahrenheit - 32) * (5 / 9);
// console.log(celsius);

var celsius = 60;
var fahrenheit = celsius * (9 / 5) + 32;
console.log(fahrenheit); // 160

//  Interest Calculator //

var interest = (principal * rate * time) / 100;
var principal = 20000;
var rate = 3.9;
var time = 5;

console.log(interest);

// Swapping Values //

var a = 9;
var b = 4;
console.log("Before swapping: a =", a, ", b =", b);

a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a =", a, ", b =", b);

// Implementing Mathematical Formulas //

var radius = 5;
var area = 3.14 * radius * radius;
console.log("Area of circle:", area);

var length = 10;
var width = 5;
var perimeter = 2 * (length + width);
console.log("Perimeter of rectangle:", perimeter);
