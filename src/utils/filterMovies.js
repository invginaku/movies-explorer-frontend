import filterMoviesByRequest from './filterMoviesByRequest.js';

function filterMovies(movies, request, shortFilter) {
    let filteredMovies = undefined;

    if (movies) {
        filteredMovies = [...movies];

        if (request) {
            filteredMovies = filteredMovies.filter(movie => filterMoviesByRequest(request, movie));
        }

        if (shortFilter && shortFilter.toString() === 'true') {
            filteredMovies = filteredMovies.filter(movie => movie.duration <= 40);
        }
    }

    return filteredMovies;
}

export default filterMovies;
