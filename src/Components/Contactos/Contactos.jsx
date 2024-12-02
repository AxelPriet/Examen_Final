import React from "react";
import { FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import "./Contactos.css";

const Contactos = () => {
  return (
    <div className="contactos-container">
      <h1>Contactos</h1>
      <div className="contactos-info">
        <div className="contacto-item">
          <FaPhone className="icon" />
          <span>3227597894</span>
        </div>
        <div className="contacto-item">
          <FaInstagram className="icon" />
          <span>galevir3D</span>
        </div>
        <div className="contacto-item">
          <FaFacebook className="icon" />
          <span>Galervir3D</span>
        </div>
        <div className="contacto-item">
          <FaWhatsapp className="icon" />
          <span>3227597894</span>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
