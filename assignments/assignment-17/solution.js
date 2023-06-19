// 1 //

//Write a function findCharFrequency that accepts a string and a character as arguments. This function should iterate through the string using a for loop and count the frequency of the specified character, then return this count.
//  Output: 2
// Explanation: The character 'o' appears twice in the string 'hello world'.

function findCharFrequency(string, char) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (char.includes(string[i])) {
            count++;
        }
    }
    return count;
}

console.log(findCharFrequency("hello world", "o"));

// 2 //

// Create a function vowelCounter that takes in a string and returns the count of vowels in it.
// Output: 5
// Explanation: The string 'beautiful' has 5 vowels - 'e', 'a', 'u', 'i', 'u'.

function vowelCounter(str) {
    var vowels = "aeiou";
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            counter++;
        }
    }
    return counter;
}

console.log(vowelCounter("beautiful"));

// 3 //

// Create a function isAlphaNumeric that checks whether a given string only contains English letters and digits.
// Output: true
// Explanation: The string 'hello123' contains only letters and numbers, so the output is true.
// Output false
// Explanation: The string 'hello12?$3' contains ? and $ chars, so output is false

function isAlphaNumeric(str) {
    for (var i = 0; i < str.length; i++) {
        var invalidChar = "![]{};,<>./?|";
        if (invalidChar.includes(str[i])) {
            return false;
        }
    }
    return true;
}

console.log(isAlphaNumeric("Morning700"));
console.log(isAlphaNumeric("Morning70/?0"));

// 4 //

//  Write a function isAllVowels that verifies if a string consists only of vowel characters.
// isAllVowels('aeiou');
// Output: true
// Explanation: The string 'aeiou' only contains vowels, so the output is true.
//isAllVowels('aeiouuupu');
// Output: false
// Explanation: The string 'aeiouuupu' has a one consonant (p), so output is false

function isAllVowels(str) {
    var vowels = "aeiou";
    for (var i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            return true;
        }
    }
    return false;
}

console.log(isAllVowels("aeiou"));
console.log(isAllVowels("aeiouuuupu"));

// 5 //

//Construct a function capitalizeVowels that changes all vowels in a lowercase string to uppercase.
// Output: 'hEllO'
// Explanation: The function converts all vowels 'e' and 'o' in the string 'hello' to uppercase, resulting in the new string 'hEllO'.

function capitalizeVowels(str) {
    var result = "";
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if (vowels.includes(char)) {
            result = result + char.toUpperCase();
        } else {
            result = result + char;
        }
    }

    return result;
}

console.log(capitalizeVowels("hello"));

// 6 //

//Build a function sliceFromFirstVowel that returns a substring starting from the first vowel to the end of the original string.
// Output: 'avascript'
// Explanation: The function slices the string 'javascript' starting from the first vowel 'a' to its end, resulting in the new string 'avascript'.

function sliceFromFirstVowel(str) {
    var vowels = "aoeiu";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (vowels.includes(char)) {
            return str.slice(i);
        }
    }
    return "There's is no vowels in the string";
}

console.log(sliceFromFirstVowel("javascript"));

// 7 //

// Create a function areConsonantsMore that returns true if the number of consonants in a string is higher than the number of vowels.
// areConsonantsMore('javascript');
// Output: true
// Explanation: The string 'javascript' contains 7 consonants and 3 vowels. Since the number of consonants is greater than the number of vowels, the output is true.

function areConsonantsMore(str) {
    var vowels = ["a", "e", "i", "o", "u"];
    var consonantCount = 0;
    for (var i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i].toLowerCase())) {
            consonantCount++;
        }
    }
    return consonantCount > vowelCounter(str);
}

console.log(areConsonantsMore("javascript"));

// 8 //

//  Implement a function doubleVowels that doubles all the vowels in a given string.
// Output: 'heelloo'
// Explanation: The function doubles all vowels in 'hello', which are 'e' and 'o', resulting in the new string 'heelloo'.

function doubleVowels(string) {
    var result = "";
    var vowels = "aoeiu";
    for (var i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            result = result + string[i] + string[i];
        } else {
            result = result + string[i];
        }
    }
    return result;
}

console.log(doubleVowels("hello"));

// 9 //

// Write a function sumDigits that takes any valid integer and returns the sum of its digits.
//sumDigits(12345);
// Output: 15
// Explanation: The sum of the digits in the number 12345 is 1+2+3+4+5, which equals 15.

function sumDigits(num) {
    var numString = num.toString();
    var sum = 0;
    for (var i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
    }

    return sum;
}

console.log(sumDigits(12345));

// 10 //

// Create a function preserveLetters that takes a string of a single word and returns a new string with all characters except letters removed.
//preserveLetters("Hello,123");
// Output: 'Hello'
// Explanation: The function removes all characters in 'Hello,123' that are not letters, resulting in the new string 'Hello'.

function preserveLetters(str) {
    var preserved = "";
    for (var i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            preserved += str[i];
        }
    }

    return preserved;
}

console.log(preserveLetters("Hello, 123"));
