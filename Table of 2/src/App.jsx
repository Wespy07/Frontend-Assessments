import { useState } from 'react'

import './App.css'
import Table from './components/Table';

function App() {
  const [count, setCount] = useState(0)
  const [clickCount, setClickCount] = useState(0);

  function incrementor() {
    setCount(count + 2)
    setClickCount(clickCount + 1)
  }

  function decrementor() {

    if (count !== 0) {
      setCount(count - 2)
      setClickCount(clickCount - 1)
    }
  }

  return (
    <>
      <h2>Multiples of 2</h2>
      < Table tableTotal={count} tableCount={clickCount} />
      <button onClick={decrementor}>Previous</button>
      {' '}
      <button onClick={incrementor}>Next</button>
    </>
  )
}

export default App
