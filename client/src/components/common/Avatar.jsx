import React from "react";

const Avatar = ({ name }) => {
  const styles = {
    avatar: "mb-6 flex flex-col items-center",
    avatarImage: "mb-4 rounded-full bg-gray-300 w-24 h-24",
  };

  return (
    <div className={styles.avatar}>
      <div className={styles.avatarImage}></div>
      <h1>{name}</h1>
    </div>
  );
};

export default Avatar;
