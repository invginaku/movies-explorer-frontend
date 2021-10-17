function filterMoviesByRequest(request, movie) {
    const searchRequest = request.toLowerCase();

    if (movie.nameEN && movie.nameRU) {
        const englishName = movie.nameEN.toLowerCase();
        const russianName = movie.nameRU.toLowerCase();

        return englishName.includes(searchRequest) || russianName.includes(searchRequest);
    } else if (movie.nameEN && !movie.nameRU) {
        const englishName = movie.nameEN.toLowerCase();

        return englishName.includes(searchRequest);
    } else {
        const russianName = movie.nameRU.toLowerCase();

        return russianName.includes(searchRequest);
    }
}

export default filterMoviesByRequest;
