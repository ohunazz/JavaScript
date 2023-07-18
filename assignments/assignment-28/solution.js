const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        yearPublished: 1967,
        genres: ["Tragedy"],
        ratings: [
            { id: 1, score: 4.9 },
            { id: 2, score: 4.7 },
            { id: 3, score: 5 },
            { id: 4, score: 4.4 },
            { id: 5, score: 4.5 }
        ]
    },
    {
        title: "One Hundred Years of Solitude",
        author: "Gabriel García Márquez",
        yearPublished: 1813,
        genres: ["Magic realism"],
        ratings: [
            { id: 7, score: 5 },
            { id: 4, score: 4.9 },
            { id: 2, score: 4.3 }
        ]
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper LeeJ.R.R. Tolkien",
        yearPublished: 1960,
        genres: ["Adventure"],
        ratings: [
            { id: 3, score: 4.4 },
            { id: 5, score: 5 },
            { id: 1, score: 4.7 }
        ]
    }
];

const users = [
    { name: "Tom", id: 1 },
    { name: "Natalia", id: 2 },
    { name: "Johnson", id: 3 },
    { name: "Mark", id: 4 },
    { name: "Morgan", id: 5 }
];

function findLibraryUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            return users[i];
        }
    }
    return "ID number is not found!";
}

console.log(findLibraryUser(5));
console.log(findLibraryUser(6));
