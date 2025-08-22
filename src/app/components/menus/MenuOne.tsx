'use client'

import React, { useState } from 'react';
import styles from "@/app/css/menues/menuone.module.css"
import { CiMenuBurger } from "react-icons/ci";


const MenuClasico = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles["div-general"]}>
      <button className={styles["button-deploy"]} onClick={toggleMenu}>
        <CiMenuBurger />
      </button>
      <nav className={`${styles["nav-menu"]} ${isOpen ? styles["open"] : ""}`}>
        <ul className={styles["ul-menu"]}>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuClasico;