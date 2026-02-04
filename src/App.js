
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './mainpage';
import Contact from './contact';
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    // <Router basename="/Success-and-Bright-Learning-Co.">
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
