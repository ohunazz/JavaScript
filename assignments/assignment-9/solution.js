//  Part-1 //

var randomNumber1 = Math.floor(Math.random() * 10) + 1;

var name1 = "Joe";

if (randomNumber1 >= 1 && randomNumber1 <= 3) {
    name1 = "Joe";
} else if (randomNumber1 >= 4 && randomNumber1 <= 7) {
    name1 = "Sophia";
} else {
    name1 = "Jennifer";
}

console.log(name1);

// Part-2 //

var randomNumber2 = Math.floor(Math.random() * 4) + 1;

if (randomNumber2 === 1) {
    console.log(
        "Dear " +
            name1 +
            ", wishing you a day filled with happiness and a year filled with joy."
    );
} else if (randomNumber2 === 2) {
    console.log(
        "Dear " +
            name1 +
            ", sending you smiles for every moment of your special day."
    );
} else if (randomNumber2 === 3) {
    console.log(
        "Dear " + name1 + ", have a wonderful time and a very happy day!"
    );
} else {
    console.log(
        "Dear " +
            name1 +
            ", hope your special day brings you all that your heart desires!"
    );
}
