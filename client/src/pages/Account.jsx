import React, { useState } from "react";

const AccountPage = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  const handleDelete = () => {
    console.log("User account deleted");
  };

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center ${
        theme === "dark" ? "bg-black text-yellow-300" : "bg-white text-gray-800"
      }`}
    >
      <div className='max-w-md mx-auto bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3'>
        <div className='md:flex'>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-yellow-300 font-semibold'>
              User Settings
            </div>
            <div className='block mt-1 text-lg leading-tight font-medium text-yellow-300'>
              <button
                onClick={handleThemeChange}
                className='w-full block text-left py-1.5 border-b border-yellow-300'
              >
                Switch to {theme === "dark" ? "Light" : "Dark"} Mode
              </button>
              <button className='w-full block text-left py-1.5 border-b border-yellow-300'>
                Change Password
              </button>
              <button className='w-full block text-left py-1.5 border-b border-yellow-300'>
                Notifications
              </button>
              <button className='w-full block text-left py-1.5 border-b border-yellow-300'>
                Privacy Settings
              </button>
              <button
                onClick={handleLogout}
                className='w-full block text-left py-1.5 border-b border-yellow-300'
              >
                Logout
              </button>
              <button
                onClick={handleDelete}
                className='w-full block text-left py-1.5 border-b border-yellow-300'
              >
                Delete Account
              </button>
            </div>
            <div className='uppercase tracking-wide text-sm text-yellow-300 font-semibold mt-8'>
              Preferences
            </div>
            <div className='block mt-1 text-lg leading-tight font-medium text-yellow-300'>
              <button className='w-full block text-left py-1.5 border-b border-yellow-300'>
                Favorite Genres
              </button>
              <button className='w-full block text-left py-1.5 border-b border-yellow-300'>
                Favorite Teams
              </button>
              <button className='w-full block text-left py-1.5 border-b border-yellow-300'>
                Favorite Platforms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
