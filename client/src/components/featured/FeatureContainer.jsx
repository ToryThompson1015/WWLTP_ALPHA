import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";

import React from "react";

import Carousel from "react-multi-carousel";

export default (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='featuredVideosContainer'>
      <h2 className='featuredVideosTitle'>
        <>{props.title}</>
        <a>View More</a>
      </h2>
      <Carousel
        className='featuredVideosList '
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
      >
        {props.videos.map((video) => (
          <div key={video.id + video.title} className='featuredVideoItem'>
            <div className='videoThumbnailOverlay'>
              <div className='playButton'></div>
            </div>
            <img
              src={video.thumbnail}
              alt={video.title}
              className='videoThumbnail'
            />
            <div className='videoContent'>
              <h3 className='videoTitle'>{video.title}</h3>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
