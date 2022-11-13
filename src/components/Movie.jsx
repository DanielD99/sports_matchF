useEffect(() => {
    facade.getMovies((movies) => {
      setMoviesAndReviews(movies);
    });
  }, [facade]);

Fjerne film:
const removeMovie = (movieId, e) => {
    facade.removeMovieFromWatchlist(movieId, (person) => {
      setMoviesAndReviews(
        moviesAndReviews.filter(
          (movieAndReview) => movieAndReview.movie.id !== movieId
        )
      );
    });
    e.preventDefault();
  };

Tilføje film
onClick={(e) => {
              e.preventDefault();
              const movieDTO = {
                title: movieAndReview.movie.title,
                year: movieAndReview.movie.year,
              };
              facade.addMovieToWatchlist(movieDTO, (person) => {
                const addedMovie = person.movies.filter(
                  (movie) =>
                    movie.title === movieDTO.title &&
                    movie.year === movieDTO.year
                )[0];
                movieAndReview.movie.id = addedMovie.id;
                setMoviesAndReviews([...moviesAndReviews, movieAndReview]);
              });
              setMovieTitle("");
              setMovieAndReview({});
            }}


            export default Movie;