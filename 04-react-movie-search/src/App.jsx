import { useState } from 'react'
import './dark.css'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>
      <header>
        <h1> Movies Search </h1>
        <form className='form'>
          <label> Put the name of the movie here
          <input placeholder='Avengers, Lord of the Rings, Cars...'></input>
          </label>
        </form>
      </header>

      <main>
        <button type='submit'> Search </button>
      </main>
       
    </div>
  )
}

export default App
