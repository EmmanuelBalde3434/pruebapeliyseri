import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Inicio from './modules/Inicio/Inicio';
import Series from './modules/Series/Series';
import Películas from './modules/Películas/Películas';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="App">
        <Header onMenuClick={handleToggle} />
        <Sidebar isOpen={isOpen} onClose={handleToggle} />
        <div className="contenido-principal">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Peliculas" element={<Películas />} />
            <Route path="/Series" element={<Series />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
