let movieCollection = {
    movies: [],

    addMovie: function (title, director, genre, year) {
        let movies = {
            title: "title",
            director: "director",
            genre: "genre",
            year: "year"
        };
        this.movies.push(movies);
    },

    getMovieByTitle: function (title) {
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].title === title) {
                return this.movies[i];
            }
        }
    },

    getMoviesByGenre: function (genre){
        for (let i = 0; i < this.movies.length; i++) {
            if (this.movies[i].genre === genre) {
                return this.movies[i];
            }
        }
    }

    updateMovie: function (title, update) {

    }
};
