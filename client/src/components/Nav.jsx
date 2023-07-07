import React from "react";
import LinkItem from "./LinkItem";

const NavBar = ({ onLogin }) => {
  return (
    <nav className='navContainer bg-black text-yellow-300 border-b border-yellow-500 flex justify-between items-center px-8 py-4'>
      <div className='logoWords'>WWLTP</div>
      <LinkItem text='Watch' to='#' />
      <LinkItem text='Login' to='#' onClick={onLogin} />
      <LinkItem text='Calender' to='#' />
      <div className='dropdown navItem relative'>
        <p className='dropdown-toggle'>Filter By ▼</p>
        <ul className='dropdown-menu hidden absolute bg-green-900 p-2 list-none m-0'>
          <li className='text-white no-underline text-base hover:text-pink-500'>
            <a href='/filter-by/item1'>Genres</a>
          </li>
          <hr className='dropdown-divider' /> {/* Horizontal bar */}
          <li className='text-white no-underline text-base hover:text-pink-500'>
            <a href='/filter-by/item2'>Player Ranking</a>
          </li>
          <hr className='dropdown-divider' /> {/* Horizontal bar */}
          <li className='text-white no-underline text-base hover:text-pink-500'>
            <a href='/filter-by/item3'>Country</a>
          </li>
          <hr className='dropdown-divider' /> {/* Horizontal bar */}
          <li className='text-white no-underline text-base hover:text-pink-500'>
            <a href='/filter-by/item3'>Platform</a>
          </li>
        </ul>
      </div>
      <LinkItem text='Settings' to='#' />
    </nav>
  );
};

export default NavBar;
