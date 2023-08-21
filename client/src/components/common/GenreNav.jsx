import React, { useState } from "react";
import LinkItem from "./LinkItem";

const GenreNav = ({ genres }) => {
  const [activeGenre, setActiveGenre] = useState(null);

  const handleGenreHover = (genre) => {
    setActiveGenre(genre);
  };

  const hideDropdown = () => {
    setActiveGenre(null);
  };

  return (
    <nav className=' text-yellow-300 w-full flex justify-between px-4'>
      {Object.entries(genres).map(([genre, [url, subGenres]]) => (
        <div
          key={genre}
          onMouseEnter={() => handleGenreHover(genre)}
          onMouseLeave={hideDropdown}
          className='block text-white cursor-pointer w-1/6'
        >
          <p className='text-center mb-0 py-2'>{genre}</p>
          <div
            className={
              genre === activeGenre
                ? "opacity-100 absolute w-full p-5 left-0 bg-gray-900 z-10 flex justify-evenly"
                : "hidden"
            }
          >
            {Object.entries(subGenres).map(([subGenre, subGenreUrl]) => (
              <LinkItem
                key={subGenre}
                text={subGenre}
                to={subGenreUrl}
                className=''
              />
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
};

export default GenreNav;
