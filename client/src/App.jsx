import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/Nav";
import LiveStream from "./components/Livestream";
import FeaturedVideos from "./components/Featuredvideos";
import "./App.css";
import "./components/Nav";
import HomePage from "./pages/HomePage";
import GenrePage from "./pages/GenrePage";
import UserPage from "./pages/UserPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:genre' element={<GenrePage />} />
          <Route path='/login' element={<UserPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
