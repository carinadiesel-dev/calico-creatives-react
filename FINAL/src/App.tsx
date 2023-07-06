import { useState } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navigation";
import Home from "./pages/home";
import Photography from "./pages/photography";

export default function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photography" element={<Photography />} />
    </Routes>
  </Router>
  )
}