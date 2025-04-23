

export function ListOfMovies({ movies }) {
    return(
        (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title}/>
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