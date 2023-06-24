// 1 //

// Create a JavaScript Object
// Create a JavaScript object that represents a movie. It should have the following properties: title, director, releaseYear, genre, and rating.

let movie = {
    title: "The Transporter",
    director: " Corey Yuen",
    releaseYear: 2002,
    genre: "Action/Thriller",
    rating: 7
};

console.log(movie);

// 2 //

//Accessing Object Properties
// Print out the value of each property in the console. Use both dot notation and bracket notation to access the properties.

console.log(movie.title);
console.log(movie["title"]);

console.log(movie.director);
console.log(movie["director"]);

console.log(movie.releaseYear);
console.log(movie["releaseYear"]);

console.log(movie.genre);
console.log(movie["genre"]);

console.log(movie.rating);
console.log(movie["rating"]);

// 3 //

// Undefined Properties
// Try accessing a property that you didn't define (for example, producer). Print the result to the console. What value did you get and why?

console.log(movie.producer); // undefined
console.log(movie["producer"]); // undefined

// 4 //

// Modify Object Properties
// Change the value of the rating property to a different number. Print the new value to the console.

movie.rating = 7.5;
console.log(movie);

// 5 //

// Add New Properties
// Add a new property boxOffice to the movie object. This property should represent the movie's gross box office revenue in millions of dollars. Print the value to the console.

movie.boxOffice = " 43.9 million USD";
console.log(movie);

// 6 //

// Delete Properties
// Delete the boxOffice property from the movie object. Try printing the boxOffice property to the console again. What value do you get and why?

delete movie.boxOffice;
console.log(movie.boxOffice); // undefined: because the property 'boxOffice' has been deleted from the movie object.

function printMovieDetails(movie) {
    console.log(
        `The movie '${movie.title}' was directed by '${movie.director}' and was released in ${movie.releaseYear}. It is a '${movie.genre}' film with a rating of ${movie.rating}.`
    );
}

printMovieDetails(movie);
