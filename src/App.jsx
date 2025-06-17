import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FontLoader from './components/FontLoader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Retreats from './pages/Retreats';
import Contact from './pages/Contact';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <FontLoader />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/retreats" element={<Retreats />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
