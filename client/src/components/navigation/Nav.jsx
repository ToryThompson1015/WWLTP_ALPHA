import { useState } from "react";
import LinkItem from "./LinkItem";
import LoginModal from "../auth/LoginModal";

const NavBar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [currentGenre, setCurrentGenre] = useState(null);

  const handleLogin = () => {
    setLoginOpen(true);
  };

  const styles = {
    navContainer:
      "bg-black text-yellow-300 border-b border-yellow-500 flex justify-between items-center px-8 py-4",
    logoWords: "text-white",
    dropdown: "relative",
    dropdownToggle: "text-white cursor-pointer",
    dropdownMenu: `${
      isDropdownOpen ? "flex" : "hidden"
    } absolute bg-black p-2 list-none m-0 z-50 w-full border-b border-yellow-200 border-opacity-50`,
    dropdownItem: "mr-4",
    dropdownDivider: "dropdown-divider",
    link: "text-white no-underline text-base hover:text-pink-500",
  };

  const genres = {
    Action: [
      "/genre/action",
      {
        Combat: "/genre/action/combat",
        Shooter: "/genre/action/shooter",
        Platform: "/genre/action/platform",
      },
    ],
    Adventure: [
      "/genre/adventure",
      {
        "Text Adventures": "/genre/adventure/text-adventures",
        "Graphic Adventures": "/genre/adventure/graphic-adventures",
        "Visual Novels": "/genre/adventure/visual-novels",
      },
    ],
    Strategy: [
      "/genre/strategy",
      {
        "Real-Time": "/genre/strategy/real-time",
        "Turn-Based": "/genre/strategy/turn-based",
        "Tower Defense": "/genre/strategy/tower-defense",
      },
    ],
    RPG: [
      "/genre/rpg",
      {
        "Action RPG": "/genre/rpg/action-rpg",
        MMORPG: "/genre/rpg/mmorpg",
        "Tactical RPG": "/genre/rpg/tactical-rpg",
      },
    ],
    Simulation: [
      "/genre/simulation",
      {
        "Life Simulation": "/genre/simulation/life-simulation",
        "Vehicle Simulators": "/genre/simulation/vehicle-simulators",
        "Construction and Management":
          "/genre/simulation/construction-and-management",
      },
    ],
    Sports: [
      "/genre/sports",
      {
        Football: "/genre/sports/football",
        Basketball: "/genre/sports/basketball",
        Baseball: "/genre/sports/baseball",
      },
    ],
  };

  const handleGenreHover = (genre, subGenres) => {
    setCurrentGenre(subGenres);
    setDropdownOpen(true);
  };

  return (
    <div
      className={styles.dropdown}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <nav className={styles.navContainer}>
        <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
        <div className={styles.logoWords}>WWLTP</div>
        {Object.entries(genres).map(([genre, [url, subGenres]]) => (
          <p
            key={genre}
            onMouseEnter={() => handleGenreHover(genre, subGenres)}
            className={styles.dropdownToggle}
          >
            {genre}
          </p>
        ))}
        <LinkItem text="Login" to="#" onClick={handleLogin} />
      </nav>
      <div className={styles.dropdownMenu}>
        {Object.entries(currentGenre || {}).map(([subGenre, subUrl]) => (
          <div key={subGenre} className={styles.dropdownItem}>
            <LinkItem text={subGenre} to={subUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
