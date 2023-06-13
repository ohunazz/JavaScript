// 1 //

function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

// 2 //

function reverseOrder(arr) {
    return arr.reverse();
}

console.log(reverseOrder(["Morning", "Afternoon", "Evening"])); // [ 'Evening', 'Afternoon', 'Morning' ]

//3 //

function checkValue(arr, value) {
    if (arr.includes(value)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkValue([10, 12, 14, 16], 14)); // true

// 4 //

function isArray(arr) {
    if (Array.isArray(arr)) {
        return true;
    } else false;
}
console.log(isArray([21, 38, 43, 23])); // true

// 5 //

function arraySlice(arr, num1, num2) {
    return arr.slice(num1, num2);
}

console.log(arraySlice([8, 7, 4, 3, 5], 2, 3)); // [ 4 ]

// 6 //

function removeLast(arr) {
    if (arr.length === 0) {
        return arr;
    }

    arr.pop();
    return arr;
}
console.log(removeLast(["Blue", "Red", "Green", "Yellow"]));

// 7 //
