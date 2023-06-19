// 1 //

//Create a function named stringIndexMultiplier that accepts an array of strings as an argument. This function should return the total sum of the product of each string's length and its index in the array.

//Example: //stringIndexMultiplier(["Hello", "world", "!"]);

//"Hello" has 5 characters and index 0, so the product is 5*0 = 0.
//"world" has 5 characters and index 1, so the product is 5*1 = 5.
//"!" has 1 character and index 2, so the product is 1*2 = 2.
//So, the sum of these products is 0+5+2 = 7.

function stringIndexMultiplier(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        var str = arr[i];

        var total = str.length * [i];
        sum = sum + total;
    }

    return sum;
}

console.log(stringIndexMultiplier(["Hello", "world", "!"]));

// 2 //

//Create a function named divisibilityFilter that accepts an array of numbers as an argument. The function should return a new array that only includes the numbers from the original array that are divisible by 3 or 5, but not both.

//Example: divisibilityFilter([3, 5, 15, 18, 20, 30]);

//This should return [3, 5, 18, 20].

function divisibilityFilter(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (
            (arr[i] % 3 === 0 || arr[i] % 5 === 0) &&
            !(arr[i] % 3 === 0 && arr[i] % 5 === 0)
        ) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(divisibilityFilter([3, 5, 15, 18, 20, 30]));

// 3 //

//Create a function named singleDigitSum that accepts an array of numbers as an argument. This function should return the sum of all numbers in the array that have only one digit. Note that the numbers can be both positive and negative.

//Example: singleDigitSum([-10, 1, -2, 30, 6, -7]);

//The numbers with only one digit are 1, -2, 6, -7, and their sum is -2.

//Edge Case Example: singleDigitSum([]);

//An empty array should return 0 because there are no elements to sum.

function singleDigitSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (Math.abs(num) < 10 && Math.abs(num) >= 0) {
            sum = sum + num;
        }
    }
    return sum;
}

console.log(singleDigitSum([-10, 1, -2, 30, 6, -7]));

// 4 //

// Create a function named binaryCounter that accepts an array of 0s and 1s as an argument. The function should return a two-element array showing the count of 0s and 1s in the original array, in the form: [numberOfZeroes, numberOfOnes].

//Example: binaryCounter([0, 1, 0, 1, 1, 0, 0, 1]);

//This should return [4, 4], as there are four 0s and four 1s in the array.

function binaryCounter(arr) {
    var count0 = 0;
    var count1 = 0;
    for (var i = 0; i < arr.length; i++) {
        var originalArr = arr[i];
        if (originalArr === 0) {
            count0++;
        } else if (originalArr === 1) {
            count1++;
        }
    }
    return [count0, count1];
}

console.log(binaryCounter([0, 1, 0, 1, 1, 0, 0, 1]));

// 5 //

//Create a function named uniqueStringFilter that accepts an array of strings as an argument. The function should return a new array that includes only unique strings from the original array. Note that strings are considered the same regardless of case, so "Hello" and "hello" should be treated as duplicates.

//Example: uniqueStringFilter(["Hello", "hello", "World", "world", "WORLD", "hello", "HELLO", "Test"]);

//This should return ["Hello", "World", "Test"], because all other strings are duplicates (ignoring case) of these.

function uniqueStringFilter(arr) {
    var newArr = [];
    var lowerCaseArr = [];
    for (var i = 0; i < arr.length; i++) {
        var lowerCaseStr = arr[i].toLowerCase();
        if (!lowerCaseArr.includes(arr[i].toLowerCase)) {
            lowerCaseArr.push(arr[i].toLowerCase);
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(
    uniqueStringFilter([
        ("Hello", "hello", "World", "world", "WORLD", "hello", "HELLO", "Test")
    ])
);

// 6 //

//Create a function named oddNumberSum that accepts an array of numbers as an argument. The function should return the sum of all odd numbers in the array.

//Example: oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9]); should return 25 because the sum of the odd numbers is 1 + 3 + 5 + 7 + 9 = 25.

//Edge Case: oddNumberSum([]); should return 0 because there are no numbers to sum.

function oddNumberSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if (num % 2 !== 0) {
            sum = sum + num;
        }
    }
    return sum;
}

console.log(oddNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// 7 //

//Create a function named reverseString that accepts a an array of english letters as an argument. Return a new reversed array. Do not use reverse() or toReversed() methods.

//Example: reverseString(["H", "e", "l", "l", "o"]); should return [ 'o', 'l', 'l', 'e', 'H' ]

//Edge Case:

//reverseString([]); should return [] because the input array is empty.

//reverseString(["a"]); should return ["a"] because the input array has only one element.

function reverseString(arr) {
    const reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }

    return reversedArr;
}
console.log(reverseString(["H", "e", "l", "l", "o"]));

// 8 //

//Create a function named calculateFactorial that accepts a number as an argument. The function should return the factorial of the number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.

//Example: calculateFactorial(5); should return 120, because 5*4*3*2*1 = 120.

//Edge Case: calculateFactorial(0); should return 1 because the factorial of 0 is 1 by definition.

function calculateFactorial(num) {
    var factorial = 1;
    for (var i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    if (num === 0) {
        return 1;
    }
    return factorial;
}

console.log(calculateFactorial(5));

// 9 //

//Task: Create a function named arrayElementMultiplier that accepts an array of numbers. The function should return a new array where each element is twice the value of the corresponding element in the original array.

//Example: arrayElementMultiplier([1, 2, 3, 4, 5]); should return [2, 4, 6, 8, 10].

//Edge Case: arrayElementMultiplier([]); should return [] because the input array is empty.

function arrayElementMultiplier(arr) {
    var multipliedArray = [];

    for (let i = 0; i < arr.length; i++) {
        var num = arr[i];
        multipliedArray.push(num * 2);
    }

    return multipliedArray;
}

console.log(arrayElementMultiplier([1, 2, 3, 4, 5]));

// 10 //

//Create a function named evenIndexSum that accepts an array of numbers as an argument. The function should return the sum of numbers which are located at even indices in the array.

//Example 1: evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); should return 30, because the sum of numbers at even indices (0, 2, 4, 6, 8) is 1 + 3 + 5 + 7 + 9 = 30.

//Example 2: evenIndexSum([10, 20, 30, 40, 50]); should return 90, because the sum of numbers at even indices (0, 2, 4) is 10 + 30 + 50 = 90.

//Edge Case 1: evenIndexSum([]); should return 0, because the array is empty, hence no elements to sum.

//Edge Case 2: evenIndexSum([100]); should return 100, because the array only has one element, which is located at index 0 (an even index).

function evenIndexSum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i += 2) {
        var num = arr[i];
        if (i % 2 === 0) {
            sum = sum + num;
        }
    }
    return sum;
}

console.log(evenIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
