import FeaturedVideos from "../components/Featuredvideos";
import LiveStream from "../components/Livestream";

export default () => {
  return (
    <div className='homepage'>
      <LiveStream />
      <FeaturedVideos />
    </div>
  );
};
