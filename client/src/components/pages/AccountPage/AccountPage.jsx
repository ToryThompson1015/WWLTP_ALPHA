import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ContentArea from "./ContentArea";

const AccountPage = () => {
  const [theme, setTheme] = useState("light");
  const [selectedOption, setSelectedOption] = useState("settings");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem("user");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const styles = {
    pageContainer: `min-h-screen w-full flex ${
      theme === "dark"
        ? "bg-gray-900 text-gray-100"
        : "bg-gray-100 text-gray-900"
    }`,
    contentArea: "w-3/4 p-8",
  };

  return (
    <div className={styles.pageContainer}>
      <Sidebar
        theme={theme}
        onOptionSelect={setSelectedOption}
        onThemeChange={() => setTheme(theme === "dark" ? "light" : "dark")}
        userName={userData?.profile.userName}
      />
      <div className={styles.contentArea}>
        <ContentArea selectedOption={selectedOption} userData={userData} />
      </div>
    </div>
  );
};

export default AccountPage;
