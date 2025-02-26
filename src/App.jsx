import React from 'react';
import './App.css';
import HomePage from './components/HomePage/Homepage.jsx';
import ServicesPage from './components/Services/Services.jsx';
// import CentresPage from './components/Centres/Centres.jsx';  // New Centres page import
// import PartnershipPage from './components/Partnership/Partnership.jsx';  // New Partnership page import
// import AccessoriesPage from './components/Accessories/Accessories.jsx';  // New Accessories page import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Define the Home component
function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

// Define the Services component
function Services() {
  return (
    <div>
      <ServicesPage />
    </div>
  );
}

// Define the Centres component
function Centres() {
  return (
    <div>
      <CentresPage />
    </div>
  );
}

// Define the Partnership component
function Partnership() {
  return (
    <div>
      <PartnershipPage />
    </div>
  );
}

// Define the Accessories component
function Accessories() {
  return (
    <div>
      <AccessoriesPage />
    </div>
  );
}

// Main App component
function App() {
  return (
    <Router> {/* Wrap the routes with BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Root path (Home) */}
        <Route path="/services" element={<Services />} /> {/* Services path */}
        <Route path="/centres" element={<Centres />} /> {/* Centres path */}
        <Route path="/partnership" element={<Partnership />} /> {/* Partnership path */}
        <Route path="/accessories" element={<Accessories />} /> {/* Accessories path */}
      </Routes>
    </Router>
  );
}

export default App;
