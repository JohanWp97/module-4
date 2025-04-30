/* import './dark.css' */
import './App.css'
import { useEffect, useState, useRef } from 'react'
import { ShowMovies } from './components/Movies.jsx' 
import { useMovies } from './hooks/useMovies.js'


function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef (true)
  
  useEffect(()=>{
    //línea para saber que es la primera vez que entra el usuario a la pág.
    if(isFirstInput.current){ 
      isFirstInput.current = search === ''
      return
    }

    if(search === ''){
      setError('Digita el nombre de la película')
    }else if(search.length < 2){
      setError('La película debe tener mínimo 2 caracteres')
    }else{
      setError(null)
    }

    
  }, [search])

  return { search, updateSearch, error }

}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })
  
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1> Movies Search </h1>
        <form className='form' onSubmit={handleSubmit}>
          <label> Put the name of the movie here
          <input className='text-box' style={{
            border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' //para estilizar el input desde html
          }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Lord of the Rings, Cars...'></input>
          <button type='submit'> Search </button>
          </label>
        </form>
        {error && <p style={{color: 'red'}}> {error}</p>}
      </header>

      <main>
        <ShowMovies movies={movies}/>
      </main>
       
    </div>
  )
}

export default App
