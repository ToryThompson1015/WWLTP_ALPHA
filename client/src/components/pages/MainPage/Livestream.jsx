import React from "react";

const LiveStream = () => {
  return (
    <div className="w-screen h-screen-60 relative">
      <img className="liveStreamImage" src="public/images/Diablo4.jpeg"></img>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/0SSYzl9fXOQ?autoplay=1&mute=1"
        allowFullScreen
        title="Live Stream"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default LiveStream;
