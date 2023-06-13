// 1 //

function printNumbers() {
    for (var i = 11; i <= 99; i++) {
        console.log(i);
    }
}

printNumbers();

// 2 //

function printDivisibleNumbers() {
    for (var i = 6; i <= 76; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}

printDivisibleNumbers();

// 3 //

function printDivisible2Numbers() {
    for (var i = 1; i <= 99; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i);
        }
    }
}

printDivisible2Numbers();

// 4 //

function squareNumber() {
    for (var i = 20; i <= 40; i++) {
        var square = i * i;
        console.log(square);
    }
}
squareNumber();

// 5 //

function printDivisibleEitherNumbers() {
    for (var i = 1; i <= 99; i++) {
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            console.log(i);
        }
    }
}

printDivisibleEitherNumbers();
