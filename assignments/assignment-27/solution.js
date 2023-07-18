/*1. Find the Maximum Number

Write a function that takes an array of arrays as input and finds the maximum number in the nested arrays. Return the maximum number found. */

function findMaxNumber(arr) {
    let maxNum = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxNum) {
                maxNum = arr[i][j];
            }
        }
    }
    return maxNum;
}

console.log(
    findMaxNumber([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
); // Output: 9

/*2. Count Characters

Write a function that takes an array of arrays of characters as input. Count the occurrences of each character and return an object with character counts in the format { character: count }. */

/*3. Filter Divisible Numbers

Write a function that takes an array of arrays of numbers as input. Create a new array that contains only the numbers divisible by 3 from the nested arrays. Return the new array. */

function filterDivisibleByThree(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let char = arr[i][j];
            if (char % 3 === 0) {
                newArr.push(char);
            }
        }
    }
    return newArr;
}

console.log(
    filterDivisibleByThree([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);
// Output: [3, 6, 9]

/*4. Find the Longest String

Write a function that takes an array of arrays of strings as input. Find the longest string among the nested arrays and return it.
 */

function findLongestString(arrays) {
    let longestString = "";

    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            const currentString = arrays[i][j];
            if (currentString.length > longestString.length) {
                longestString = currentString;
            }
        }
    }

    return longestString;
}

console.log(
    findLongestString([
        ["apple", "banana"],
        ["carrot", "date", "eggplant"],
        ["fig"]
    ])
); // Output: 'eggplant'

/* 5: Sum of Numbers (including nested arrays)

Write a function that takes an array as input. The array may contain numbers and/or nested arrays of numbers. Find the sum of all the numbers, including the numbers in the nested arrays. Use Array.isArray() to check if a passed value is an array. */

function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        } else {
            sum += arr[i];
        }
    }

    return sum;
}
console.log(sumArray([1, 2, [3, 4, 5, 6], 7, [8, 9]])); // Output: 45

/*6. Capitalize Strings

Write a function that takes an array of arrays of lowercase strings as input. Return a new nested array with all the strings capitalized. */

function capitalizeStrings(arrays) {
    const capitalizedArray = [];

    for (let i = 0; i < arrays.length; i++) {
        const innerArray = arrays[i];
        const capitalizedInnerArray = [];

        for (let j = 0; j < innerArray.length; j++) {
            const string = innerArray[j];
            const capitalizedString = string.toUpperCase();
            capitalizedInnerArray.push(capitalizedString);
        }

        capitalizedArray.push(capitalizedInnerArray);
    }

    return capitalizedArray;
}

/*7. Find Minimum and Maximum Arrays

Write a function that takes an array of arrays as input. Return an object with two keys: 'min' and 'max'. The 'min' key should have the value of the inner array with the smallest sum, and the 'max' key should have the value of the inner array with the largest sum. */

/*8. Merge Nested Arrays

Write a function that takes an array of arrays as input. Merge the nested arrays into a single array, maintaining the order of the nested arrays. Return the merged array. */

function mergeNestedArrays(arr) {
    let mergedArr = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            mergedArr.push(arr[i][j]);
        }
    }
    return mergedArr;
}
console.log(
    mergeNestedArrays([
        [1, 2],
        [3, 4],
        [5, 6]
    ])
); // Output: [1, 2, 3, 4, 5, 6]
