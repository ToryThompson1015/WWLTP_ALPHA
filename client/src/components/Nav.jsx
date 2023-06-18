import React from "react";

const NavBar = () => {
  return (
    <nav className='navContainer'>
      <div className='logoWords'>WWLTP</div>
      <a className='navItem' href='/'>
        Watch
      </a>
      <a className='navItem' href='/login'>
        Login
      </a>
      <a className='navItem' href='/calendar'>
        Calendar
      </a>
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
