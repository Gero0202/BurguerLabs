'use client'

// components/menus/MenuClasico.jsx
import React, { useState } from 'react';

const MenuClasico = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        <span className="line">-</span>
        <span className="line">-</span>
        <span className="line">-</span>
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuClasico;