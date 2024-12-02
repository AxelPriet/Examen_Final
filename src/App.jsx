import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Gallery from './Components/Galeria/Galeria';
import Contactos from './Components/Contactos/Contactos';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/contacto" element={<Contactos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

