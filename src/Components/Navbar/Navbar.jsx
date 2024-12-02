import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta

const Navbar = () => {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar>
        <Typography variant="h6" className="navbar-title">
          Galería Virtual
        </Typography>
        <Button className="navbar-link" component={Link} to="/">Inicio</Button>
        <Button className="navbar-link" component={Link} to="/galeria">Galería</Button>
        <Button className="navbar-link" component={Link} to="/contacto">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;






