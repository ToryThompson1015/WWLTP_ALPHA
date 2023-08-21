import "react-multi-carousel/lib/styles.css";
import React from "react";
import Carousel from "react-multi-carousel";

const FeatureContainer = ({ title, videos }) => {
  const responsive = {
    superLargeDesktop: {
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
    mainDiv: "w-full mt-5 overflow-hidden px-4 mb-40",
    titleDiv: "flex justify-between px-5 py-3 rounded-lg mb-4", // added gradient and margin-bottom
    title: "text-3xl font-extrabold text-gray-200 shadow-sm", // enhanced font size, weight, and added shadow
    link:
      "text-2xl text-blue-200 hover:text-blue-700 transition-colors duration-300",
    videoContainer:
      "relative flex flex-col w-full h-60 md:h-80 lg:h-96 justify-between rounded-lg shadow-md m-2 hover:shadow-lg p-2 space-y-2",
    imgContainer: "w-full h-2/3 overflow-hidden rounded-t-lg",
    infoSection:
      "bg-gradient-to-br from-yellow-400 to-black w-full p-2 rounded-b-lg flex flex-col",
    videoTitle: "text-xl font-semibold mb-1", // Adjusted margin
    videoDetails: "text-sm text-white flex justify-between ",
  };

  return (
    <div className={styles.mainDiv}>
      <div className={styles.titleDiv}>
        <h1 className={styles.title}>{title}</h1>
        <a className={styles.link} href='#'>
          View More
        </a>
      </div>
      <Carousel
        className='featuredVideosList'
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
        {videos.map((video) => (
          <div key={video.id + video.title} className={styles.videoContainer}>
            <div className={styles.imgContainer}>
              <img
                src={video.thumbnail}
                alt={video.title || "NA"}
                className='w-full h-full object-cover'
              />
            </div>
            <div className={styles.infoSection}>
              <div className={styles.videoTitle}>{video.title || "NA"}</div>
              <div className={styles.videoDetails}>
                <span>{video.author || "NA"}</span>
                <span>{video.views ? `${video.views} views` : "NA views"}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeatureContainer;
