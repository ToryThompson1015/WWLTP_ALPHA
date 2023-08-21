import React from "react";
import NavBar from "../../common/Nav";

function NotFound() {
  const styles = {
    container: "bg-black w-screen h-screen flex flex-col justify-start",
    title: "text-4xl font-bold mb-8 text-white text-center mt-10",
    iframeContainer:
      " rounded-lg overflow-hidden w-full h-full flex justify-center items-center",
  };

  return (
    <div className={styles.container}>
      <NavBar className='w-screen' />
      <h1 className={styles.title}>404 NOT FOUND</h1>
      <p className='mt-8 text-white text-center'>Here's a game though</p>
      <div className={styles.iframeContainer}>
        <iframe
          src='https://kasperkain.github.io/Canvas-Snake/'
          title='Snake Game'
          width='500px'
          height='700px'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default NotFound;
