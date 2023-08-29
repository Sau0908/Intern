import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Landing from "./pages/landing";
import Compete from "./pages/compete";

import Eresources from "./pages/E-resources/Eresources";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {localStorage.getItem("user_login") ? (
          <Route path="/" element={<Landing />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/compete" element={<Compete />} />

        <Route path="/e-resources" element={<Eresources />} />
      </Routes>
    </Router>
  );
}
