// 1 //

function arrOfNum(start, end) {
    var sum = [];
    for (var i = start; i <= end; i++) {
        sum.push(i);
    }
    return sum;
}

console.log(arrOfNum(12, 18));

// 2 //

function arrNumDivisibleBySeven(start, end) {
    var total = [];
    for (var i = start; i <= end; i++) {
        if (i % 7 === 0) {
            total.push(i);
        }
    }
    return total;
}

console.log(arrNumDivisibleBySeven(12, 56));

// 3 //

function numArrDivisibleBy3And5(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(numArrDivisibleBy3And5(3, 45));

// 4 //

function arrOfPositive(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        if (i * i >= start && i * i <= end) {
            result.push(i);
        }
    }
    return result;
}

console.log(arrOfPositive(1, 10));

// 5 //

function divisibleNumBy3And5(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            result.push(i);
        }
    }
    return result;
}
console.log(divisibleNumBy3And5(1, 16));
