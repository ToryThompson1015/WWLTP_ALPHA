import { useState } from "react";
import NavBar from "../components/Nav";
import LiveStream from "../components/Livestream";
import FeaturedVideos from "../components/featured/Featuredvideos";
import TestVideos1 from "../components/featured/TestVideos1";
import TestVideos2 from "../components/featured/TestVideos2";

function Main({ onLogin }) {
  const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col w-screen bg-black text-white'>
      <NavBar onLogin={onLogin} />
      <LiveStream />
      <FeaturedVideos />
      <TestVideos1 />
      <TestVideos2 />
    </div>
  );
}

export default Main;
