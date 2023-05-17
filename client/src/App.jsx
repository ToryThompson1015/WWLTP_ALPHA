import { useState } from 'react'

import './App.css'
import './components/Nav'
import NavBar from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <NavBar/>
      </div>
     
    </>
  )
}

export default App
