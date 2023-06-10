// 1 //

function lengthOfString(string) {
    var sum = string.length;
    return sum;
}

console.log(lengthOfString("Morning")); // 7

// 2 //

function concatenateStrings(str1, str2) {
    var result = str1 + str2;
    return result;
}

console.log(concatenateStrings("Good", "Night")); // GoodNight

// 3 //

function toUpperCase(str) {
    var result = str.toUpperCase();
    return result;
}

console.log(toUpperCase("Welcome")); // WELCOME

// 4 //

function toLowerCase(str) {
    var result = str.toLowerCase();
    return result;
}

console.log(toLowerCase("NICE")); //nice

// 5 //

function findSubstring(str, substring) {
    var result = str.includes(substring);
    return result;
}

console.log(findSubstring("Nice Weather", "Weather")); // true

// 6 //

function replaceSubstring(str, substring1, substring2) {
    var result = str.replace(substring1, substring2);
    return result;
}

console.log(replaceSubstring("Hello, World!", "Hello", "Hi")); // Hi, World!

// 7 //

function charAtPosition(str, position) {
    return str.charAt(position);
}

console.log(charAtPosition("Sun", 1)); // u

// 8 //

function trimString(str) {
    return str.trim();
}

console.log(trimString(" House ")); // House

// 9 //

function stringStartsWith(str, substring) {
    return str.startsWith(substring);
}

console.log(stringStartsWith("Hey", "Morning")); //false

// 10 //

function stringEndsWith(str, substring) {
    return str.endsWith(substring);
}

console.log(stringEndsWith("Good", "Day")); // false

// 11 //

function convertStringToNumber(str) {
    return Number(str);
}

console.log(convertStringToNumber("1991")); // 1991

// 12 //

function sliceString(str, start, end) {
    return str.slice(start, end);
}

console.log(sliceString("Great Job", 0, 5)); // Great

// 13 //

function concatenateAndToUpper(str1, str2) {
    var concatenatedString = str1 + str2;
    var uppercasedString = concatenatedString.toUpperCase();
    return uppercasedString;
}

console.log(concatenateAndToUpper("nice", "day")); //NICEDAY
