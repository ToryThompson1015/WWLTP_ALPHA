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

  const styles = {
    mainDiv: "w-full mt-5",
    titleDiv: "flex justify-between px-5",
    title: "text-xl",
    link: "text-xl",
    videoContainer: "flex flex-col w-full h-full justify-center",
    overlay:
      "absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 hover:opacity-90 transition-opacity duration-300",
    playButton: "playButton absolute",
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>{props.title}</h1>
        <a className={styles.link}>View More</a>
      </div>
      <Carousel
        className="featuredVideosList"
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {props.videos.map((video) => (
          <div key={video.id + video.title} className={styles.videoContainer}>
            <div className={styles.overlay}>
              <div className={styles.playButton}>( PLAY )</div>
            </div>
            <img src={video.thumbnail} alt={video.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
