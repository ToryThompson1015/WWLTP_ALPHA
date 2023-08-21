import React from "react";
import FeatureContainer from "./FeatureContainer";

const FeaturedVideos = () => {
  // Dummy data for featured videos
  const featuredVideos = [
    {
      id: 1,
      title: "Video 234",
      thumbnail:
        "https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2022/12/New-Project-aa82f1fca2faaa0cef69.jpg?resize=1200%2C675&ssl=1",
    },
    {
      id: 2,
      title: "Video 555",
      thumbnail:
        "https://www.denofgeek.com/wp-content/uploads/2021/02/Diablo-2-resurrected.jpg?resize=768%2C432",
    },
    {
      id: 3,
      title: "Video 3",
      thumbnail:
        "https://www.denofgeek.com/wp-content/uploads/2021/02/Diablo-2-resurrected.jpg?resize=768%2C432",
    },
    {
      id: 2,
      title: "Video 2",
      thumbnail:
        "https://i0.wp.com/news.xbox.com/en-us/wp-content/uploads/sites/2/2021/09/Diablo2_HERO.jpg?fit=1920%2C1080&ssl=1",
    },
    {
      id: 2,
      title: "Video 2dddd",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSteTiGXBEtCSqdS2ULhLzJ2gDn2PShZ9fTLby1ie_T_Q&usqp=CAU&ec=48665698",
    },
    // Add more featured videos as needed
    // ...
  ];

  return <FeatureContainer videos={featuredVideos} title="Featured Videos" />;
};

export default FeaturedVideos;
