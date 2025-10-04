import React, { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import AllDoc from "./pages/AllDoc";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import ErrorPage from "./pages/ErrorPage";
import Nav from "./Components/Nav";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check localStorage for logged-in user on mount
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setLoggedIn(true);
      setUser(loggedInUser);
    }
  }, []);

  return (
    <Router>
      <Nav
        loggedIn={loggedIn}
        user={user}
        setLoggedIn={setLoggedIn}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} user={user} />} />
        <Route path="/AllDoc" element={<AllDoc />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/signup"
          element={<Signup setLoggedIn={setLoggedIn} setUser={setUser} />}
        />
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />}
        />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
