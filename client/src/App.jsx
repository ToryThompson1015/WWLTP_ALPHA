import { useState } from "react";

import "./App.css";
import "./components/Nav";
import NavBar from "./components/Nav";
import LiveStream from "./components/Livestream";
import FeaturedVideos from "./components/featured/Featuredvideos";
import TestVideos1 from "./components/featured//TestVideos1";
import TestVideos2 from "./components/featured//TestVideos2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='app'>
      <NavBar />

      <LiveStream />
      <FeaturedVideos />
      <TestVideos1 />
      <TestVideos2 />
    </div>
  );
}

export default App;
