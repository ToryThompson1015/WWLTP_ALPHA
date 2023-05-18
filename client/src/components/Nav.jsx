import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navContainer'>
      <div className='logoWords'>WWLTP</div>
      <Link className='navItem' to='/'>
        Watch
      </Link>
      <Link className='navItem' to='/login'>
        Login
      </Link>
      <Link className='navItem' to='/calendar'>
        Calendar
      </Link>
      <div className='dropdown navItem'>
        <p className='dropdown-toggle'>Filter By ▼</p>
        <ul className='dropdown-menu'>
          <li>
            <a href='/filter-by/item1'>Genres</a>
          </li>
          <hr className='dropdown-divider' /> {/* Horizontal bar */}
          <li>
            <a href='/filter-by/item2'>Player Ranking</a>
          </li>
          <hr className='dropdown-divider' /> {/* Horizontal bar */}
          <li>
            <a href='/filter-by/item3'>Country</a>
          </li>
          <hr className='dropdown-divider' /> {/* Horizontal bar */}
          <li>
            <a href='/filter-by/item3'>Platform</a>
          </li>
        </ul>
      </div>
      <a className='navItem' href='/settings'>
        Settings
      </a>
    </nav>
  );
};

export default NavBar;
