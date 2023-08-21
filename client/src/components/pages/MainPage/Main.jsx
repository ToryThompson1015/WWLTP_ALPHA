import NavBar from "../..//common/Nav";
import LiveStream from "./Livestream";
import FeaturedVideos from "./Featuredvideos";
import TestVideos1 from "./TestVideos1";
import TestVideos2 from "./TestVideos2";

function Main() {
  return (
    <div className='overflow-hidden flex flex-col bg-black text-white'>
      <NavBar />
      <LiveStream />
      <FeaturedVideos />
      <TestVideos1 />
      <TestVideos2 />
    </div>
  );
}

export default Main;
