import React from 'react';

import { Carousel } from 'react-responsive-carousel';

const FeaturedVideos = () => {
  // Dummy data for featured videos
  const featuredVideos = [
    {
      id: 1,
      title: 'Video 1',
      thumbnail: 'https://example.com/video1-thumbnail.jpg',
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnail: 'https://example.com/video2-thumbnail.jpg',
    },
    {
      id: 3,
      title: 'Video 3',
      thumbnail: 'https://example.com/video3-thumbnail.jpg',
    },
    {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://example.com/video2-thumbnail.jpg',
      }, {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://example.com/video2-thumbnail.jpg',
      }, {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://example.com/video2-thumbnail.jpg',
      }, {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://example.com/video2-thumbnail.jpg',
      }, {
        id: 2,
        title: 'Video 2',
        thumbnail: 'https://example.com/video2-thumbnail.jpg',
      },
    // Add more featured videos as needed
    // ...
    {
      id: 10,
      title: 'Video 10',
      thumbnail: 'https://example.com/video10-thumbnail.jpg',
    },
  ];

  return (

    
    <div className="featuredVideosContainer">
      <h2 className="featuredVideosTitle">Featured Videos</h2>

      {/* carousel options */}
      <Carousel
      className="featuredVideosList"
      showArrows
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      centerMode
      centerSlidePercentage={33}
    >
        {featuredVideos.map((video) => (
          <div key={video.id} className='carousel-item'>
          <div className="featuredVideoItem">
            <div className="videoThumbnailOverlay">
              <div className="playButton"></div>
            </div>
            <img src={video.thumbnail} alt={video.title} className="videoThumbnail" />
            <div className="videoContent">
              <h3 className="videoTitle">{video.title}</h3>
            </div>
          </div>
          </div>
        ))}
        </Carousel>
      </div>
  );
};

export default FeaturedVideos;
