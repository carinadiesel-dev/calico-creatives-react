import { useState } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/navigation";
import Home from "./pages/home";
import Photography from "./pages/photography";
import LogoDesign from "./pages/graphic-design/logo-design";
import WebDesign from "./pages/graphic-design/web-design";
import BrandingAndSM from "./pages/graphic-design/branding-and-social-media";
import StationaryAndEvents from "./pages/graphic-design/stationary-and-events";
import PostersAndAds from "./pages/graphic-design/posters-and-ads";
import AnimatedGraphics from "./pages/graphic-design/animated-graphics";
import Contact from "./pages/contact";


// Pages coming soon
import TravelBlog from "./pages/travel-blog";
import PhotoGallery from "./pages/photo-gallery";

export default function App() {
  return (
    
      <div className="relative">

      
    {/* <Layout/> */}
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home/>} />
      <Route path="/photography" element={<Photography />} />
      <Route path="/graphic-design/logo-design" element={<LogoDesign/>} />
      <Route path="/graphic-design/web-design" element={<WebDesign/>} />
      <Route path="/graphic-design/animated-graphics" element={<AnimatedGraphics/>} />                  
      <Route path="/graphic-design/branding-and-social-media" element={<BrandingAndSM />}/> 
      <Route path="/graphic-design/stationary-and-events" element={<StationaryAndEvents/>} />                 
      <Route path="/graphic-design/posters-and-ads" element={<PostersAndAds/>} />

      <Route path="/contact" element={<Contact />} />
      {/* Pages coming soon */}
      <Route path="/travel-blog" element={<TravelBlog />} />
      <Route path="/photo-gallery" element={<PhotoGallery />} />
      </Route>
    </Routes>
    </div>
  )
}