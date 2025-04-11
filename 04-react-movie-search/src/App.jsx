import { useState } from 'react'
import './dark.css'
import './App.css'
import { ShowMovies } from './components/Movies.jsx'
import responseMovies from './mocks/with-results.json'
import notResponseMovies from './mocks/not-found.json'  



function App() {
  const movies = responseMovies.Search
  

  return (
    <div className='page'>
      <header>
        <h1> Movies Search </h1>
        <form className='form'>
          <label> Put the name of the movie here
          <input placeholder='Avengers, Lord of the Rings, Cars...'></input>
          <button type='submit'> Search </button>
          </label>
        </form>
      </header>

      <main>
        <ShowMovies movies={movies}/>
      </main>
       
    </div>
  )
}

export default App
