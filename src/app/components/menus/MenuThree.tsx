'use client'

import React, { useState } from 'react';
import styles from "@/app/css/menues/menuthree.module.css"
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from 'react-icons/io';


const MenuVertex = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles["div-general"]}>
            <button className={styles["button-deploy"]} onClick={toggleMenu}>
                <CiMenuBurger />
            </button>

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
                    <div className={styles['div-search']}>
                        <li>
                            <input
                                type="text"
                                className={styles['input-search']}
                                placeholder='Search'
                            />
                        </li>
                        <li>
                            <button className={styles['button-search']}>Submit</button>
                        </li>
                    </div>
                </ul>
            </nav>
        </div >
    );
};

export default MenuVertex;