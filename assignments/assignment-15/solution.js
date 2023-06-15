// 1 //

function countOfNumbers(start, end) {
    return end - start + 1;
}

console.log(countOfNumbers(15, 30));

// 2 //

function numDivisibleBySeven(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(numDivisibleBySeven(14, 72));

// 3 //

function numThreeFive(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            counter++;
        }
    }
    return counter;
}

console.log(numThreeFive(3, 35));

// 4 //

function numSquare(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if (i * i >= start && i * i <= end) {
            counter++;
        }
    }
    return counter;
}

console.log(numSquare(5, 60));

// 5 //

function numDivisibleBy3And5(start, end) {
    var counter = 0;
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            counter++;
        }
    }
    return counter;
}

console.log(numDivisibleBy3And5(2, 20));
