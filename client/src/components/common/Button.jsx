import React from "react";

const Button = ({ onClick, children }) => {
  const styles = {
    button:
      "px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition-colors duration-200",
  };

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
