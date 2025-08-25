'use client'

import React, { useState } from 'react';
import styles from "@/app/css/menues/menusix.module.css"
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io';
import { IoMdCart } from "react-icons/io";
import { FaUser } from "react-icons/fa";


const MenuVector = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles["div-general"]}>

            <div className={styles["div-menu-butons"]}>
                <button className={styles["button-deploy"]} onClick={toggleMenu}>
                    <CiMenuBurger />
                </button>
        
                <div className={styles["auth-buttons"]}>
                    <button className={styles["btn-signin"]}>Sign in</button>
                    <button className={styles["btn-register"]}>Register</button>
                </div>
            </div>
            {isOpen && <div className={styles["overlay"]} onClick={() => setIsOpen(false)} ></div>}

            <nav className={`${styles["nav-menu"]} ${isOpen ? styles["open"] : ""}`}>
                <button
                    className={styles["close-btn"]}
                    onClick={() => setIsOpen(false)}
                >
                    <IoMdClose />
                </button>
                <p className={styles["icono"]}>🍔</p>
                <ul className={styles["ul-menu"]}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a className={styles["user-icon"]} href="#"><FaUser /></a></li>
                    <li><a className={styles["cart-icon"]} href="#"><IoMdCart /></a></li>
                </ul>
            </nav>
        </div >
    );
};

export default MenuVector;