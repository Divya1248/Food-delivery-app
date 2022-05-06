import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Component/AuthComponents/LoginForm";
import Phone from "./Component/AuthComponents/Phone";
import SignUpForm from "./Component/AuthComponents/SignUpForm";
import Home from "./Pages/Home";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Pages/Nav";
import PasswordReset from "./Component/AuthComponents/PasswordReset";
import Restaurant from "./Pages/Restaurant/Restaurant";
import Create from "./Pages/Restaurant/Create";



const App = () => {
  return (
    <Router>
      <header>
    <NavBar/>
      </header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/PhoneAuth" element={<Phone />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/Add" element={<Create/>}/>
      </Routes>
    </Router>
  );
};

export default App;
