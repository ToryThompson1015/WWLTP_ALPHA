import React from 'react';

const LiveStream = () => {
  return (
    <div className="liveStreamContainer">
      <iframe
        className="liveStream"
        src="https://www.youtube.com/embed/rN_PBAK5YyM"
        frameBorder="0"
        allowFullScreen
        title="Live Stream"
      ></iframe>
    </div>
  );
};

export default LiveStream;