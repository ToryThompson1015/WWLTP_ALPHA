import React from 'react';

const LiveStream = () => {
  return (
    <div className="liveStreamContainer">
      <img className="liveStreamImage" src="public/images/Diablo4.jpeg">

      </img>
      <iframe
        className="liveStream"
        src="https://www.youtube.com/embed/0SSYzl9fXOQ"
        frameBorder="0"
        allowFullScreen
        title="Live Stream"
      ></iframe>

      
    </div>
  );
};

export default LiveStream;

