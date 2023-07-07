import React from "react";

const LiveStream = () => {
  return (
    <div className='w-screen h-screen-60 border border-white relative'>
      <img className='liveStreamImage' src='public/images/Diablo4.jpeg'></img>
      <iframe
        className='absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300'
        src='https://www.youtube.com/embed/0SSYzl9fXOQ'
        frameBorder='0'
        allowFullScreen
        title='Live Stream'
      ></iframe>
    </div>
  );
};

export default LiveStream;
