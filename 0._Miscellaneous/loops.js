const barbieMovies = [
    { name: "Svanesøenn", year: "2001" },
    { name: "Princess and the pauper", year: "2008" },
    { name: "Fairies", year: "2014" },
];

const ratedBarbieMovies = barbieMovies.map((movie) => {
    movie.rating = 10
    return movie;

});
// task give me movies recent than 2010
const recentBarbieMovies = barbieMovies.filter(movie => movie.year > 2005);
    
console.log(recentBarbieMovies);

//console.log(ratedBarbieMovies);



// map, reduce, filter
// forEach
