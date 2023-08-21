import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/pages/MainPage/Main";
import AccountPage from "./components/pages/AccountPage/AccountPage.jsx";
import SignupPage from "./components/pages/SignUpPage/SignupPage";
import NotFound from "./components/pages/NotFound/NotFoundPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='account' Component={AccountPage} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
