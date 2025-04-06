import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BasicInfo from './components/BasicInfo';
import Work from './components/Work';
import Skills from './components/Skills';
import Resources from './components/Resources';
import DeveloperSetup from './components/DeveloperSetUp';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BasicInfo />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/dev-setup" element={<DeveloperSetup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;
