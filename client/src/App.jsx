import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Register from "./pages/Register";
import LoginModal from "./components/LoginModal";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);

  const handleLogin = () => {
    setLoginOpen(true);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main onLogin={handleLogin} />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
    </Router>
  );
}

export default App;
