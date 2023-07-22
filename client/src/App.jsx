import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Register from "./pages/Register";
import AccountPage from "./pages/Account";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="account" Component={AccountPage} />
      </Routes>
    </Router>
  );
}

export default App;
