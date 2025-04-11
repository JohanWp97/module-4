

export function ListOfMovies({ movies }) {
    return(
        (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title}/>
                  </li>
                ))
              }
            </ul>
          )
    )
}

export function NotMoviesFound() {
    return (
        <p> Not Results </p>
    )
}

export function ShowMovies({ movies }) {
    const hasMovies = movies?.length > 0 // ?.length significa: si el tamaño del arreglo.

    return (
        hasMovies
        ? <ListOfMovies movies={movies} />
        : <NotMoviesFound />
    )
}