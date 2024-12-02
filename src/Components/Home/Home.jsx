import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido a la Galería Virtual de Arte
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Explora obras de arte en 3D e interactúa con ellas.
      </motion.p>
    </div>
  );
};

export default Home;

