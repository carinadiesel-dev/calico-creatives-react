import { useState } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navigation";
import Home from "./pages/home";
import Photography from "./pages/photography";
import LogoDesign from "./pages/graphic-design/logo-design";


// Pages coming soon
import TravelBlog from "./pages/travel-blog";

export default function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/graphic-design/logo-design" element={<LogoDesign/>} />
      {/* Pages coming soon */}
      <Route path="/travel-blog" element={<TravelBlog />} />
    </Routes>
  </Router>
  )
}