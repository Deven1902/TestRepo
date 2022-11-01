import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Shop from "./components/pages/Shop";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Routes>
          <Route path='/' exact />
        </Routes> */}
      </Router> 
      <Home />
      <Shop />
      <About />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;