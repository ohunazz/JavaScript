// Template Literals //

var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

var result = `${part1} ${part2} ${part3} ${part4} ${part5} ${author}`;

console.log(result);

// The Concat() Method //

var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

var result = part1.concat(
    " ",
    part2,
    " ",
    part3,
    " ",
    part4,
    " ",
    part5,
    " ",
    author
);
console.log(result);

// + Operator //

var part1 = "The greatest glory in";
var part2 = "living lies not in";
var part3 = "never falling, but in";
var part4 = "rising every time";
var part5 = "we fall.";
var author = " - Nelson Mandela";

var result =
    part1 +
    " " +
    part2 +
    " " +
    part3 +
    " " +
    part4 +
    " " +
    part5 +
    " " +
    author;

console.log(result);

// Assignment Operators //

var resultOperator = part1;
resultOperator += " " + part2;
resultOperator += " " + part3;
resultOperator += " " + part4;
resultOperator += " " + part5;
resultOperator += " " + author;

console.log(resultOperator);
