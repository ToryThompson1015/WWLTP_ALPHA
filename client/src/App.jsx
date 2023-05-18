import { useState } from 'react'

import './App.css'
import './components/Nav'
import NavBar from './components/Nav'
import LiveStream from './components/Livestream'
import FeaturedVideos from './components/Featuredvideos'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
     <NavBar/>
     <LiveStream/>
     <FeaturedVideos/>
   
      </div>
     
    </>
  )
}

export default App
