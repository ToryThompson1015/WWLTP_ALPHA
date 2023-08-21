import { useState, useEffect } from "react";
import LoginModal from "../auth/LoginModal";
import TopLayerNav from "./TopLayerNav";
import GenreNav from "./GenreNav";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));
  const [isLoginOpen, setLoginOpen] = useState(false);
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("user"));
  }, []);

  const handleLogin = () => {
    setLoginOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.reload(); // Refresh on logout
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

  return (
    <div className='bg-gray-900 p-5 text-xl text-yellow-300 w-full shadow-md'>
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <TopLayerNav
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <GenreNav genres={genres} />
    </div>
  );
};

export default NavBar;
