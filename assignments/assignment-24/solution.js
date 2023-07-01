// 1 //

//  Creating User Profiles:

const userProfile = {
    name: "Jane Doe",
    age: 28,
    email: "jane@example.com",
    isAdmin: true
};
function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}

// 2 //

// Updating Inventory

function addStock(inventory, newInventory) {
    for (let item in newInventory) {
        if (inventory[item] !== undefined) {
            inventory[item] += newInventory[item];
        } else {
            inventory[item] = newInventory[item];
        }
    }
    return inventory;
}

// console.log(
//     addStock(
//         { apple: 5, banana: 3, orange: 2 },
//         { banana: 2, orange: 3, peach: 5 }
//     )
// );
// console.log(addStock({ apple: 10, orange: 5 }, { apple: 5, banana: 10 }));

// 3 //

// Filtering Properties

function filterData(object, key) {
    return { [key]: object[key] };
}

// console.log(
//     filterData(
//         {
//             city: "New York",
//             state: "New York",
//             country: "USA",
//             pincode: "10001"
//         },
//         "state"
//     )
// );
// console.log(
//     filterData(
//         {
//             city: "Los Angeles",
//             state: "California",
//             country: "USA",
//             pincode: "90001"
//         },
//         "city"
//     )
// );

// 4 //

// Checking the Perfect Score:

function perfectScore(students) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].score === 100) {
            return true;
        }
    }
    return false;
}

// console.log(
//     perfectScore([
//         { name: "John", score: 98 },
//         { name: "Jane", score: 100 },
//         { name: "Bob", score: 95 }
//     ])
// );
// console.log(
//     perfectScore([
//         { name: "Adam", score: 95 },
//         { name: "Eve", score: 99 }
//     ])
// );

// 5 //

//Counting Occurrences:

function countOccurrence(str) {
    let countChars = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (countChars[char]) {
            countChars[char]++;
        } else {
            countChars[char] = 1;
        }
    }
    return countChars;
}

// console.log(countOccurrence("banana"));
// console.log(countOccurrence("apple"));
