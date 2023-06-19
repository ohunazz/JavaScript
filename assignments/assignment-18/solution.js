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
