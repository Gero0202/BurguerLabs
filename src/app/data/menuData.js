import MenuOne from "../components/menus/MenuOne"
import MenuTwo from "../components/menus/MenuTwo"

export const menuData = [
  {
    id: 1,
    component: <MenuOne />,
    title: "CLASSIC",
    reactCode: `
          'use client'
          import { useState } from "react";
          import styles from "./page.module.css";

          export default function Classic() {
            const [isOpen, setIsOpen] = useState(false);

            const toggleMenu = () => {
              setIsOpen(!isOpen);
            };

            return (
            <div className={styles["div-general"]}>
                <button className={styles["button-deploy"]} onClick={toggleMenu}>
                  +
                </button>
                <nav className={\`\${styles["nav-menu"]} \${isOpen ? styles["open"] : ""}\`}>
                  <ul className={styles["ul-menu"]}>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Contacto</a></li>
                  </ul>
                </nav>
              </div>
            );
          } 
        `,
    javascripCode: `
          const toggleBtn = document.getElementById("toggleBtn");
          const navMenu = document.getElementById("navMenu");

          toggleBtn.addEventListener("click", () => {
            navMenu.classList.toggle("open");
          });
          `,
    htmlCode: `
         <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Menú Desplegable</title>
            <link rel="stylesheet" href="styles.css"> 
          </head>
          <body>
            <div class="div-general">
              <button class="button-deploy" id="toggleBtn">+</button>
              <nav class="nav-menu" id="navMenu">
                <ul class="ul-menu">
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Acerca de</a></li>
                  <li><a href="#">Contacto</a></li>
                </ul>
              </nav>
            </div>

            <script  src="./index.js"></script>
          </body>
          </html>
      `,
    cssCode: `
        *{
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }

          .div-general {
            width: 100%;
            background-color: rgb(96, 96, 96);
            padding: 10px;
          }

          .button-deploy {
            background: transparent;
            border: none;
            cursor: pointer;
            padding: 0.6rem;
            border-radius: 10px;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            color: #f5f5f5;
          }

          .button-deploy:hover {
            background: rgba(255, 255, 255, 0.08);
            transform: scale(1.08);
            color: #ffffff;
          }

          .button-deploy:active {
            transform: scale(0.95);
            background: rgba(255, 255, 255, 0.2);
          }

          .nav-menu {
            overflow: hidden;
            opacity: 0;
            transform: translateY(-100%);
            transition: all 0.2s ease;
            height: 0;
            padding: 0;
          }

          .nav-menu.open {
            transform: translateX(0);
            opacity: 1;
            margin: 13px;
            height: auto;
            padding: initial;
          }

          .ul-menu {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-family: sans-serif;
          }

          .ul-menu li {
            list-style-type: none;
            color: rgb(255, 255, 255);

          }

          .ul-menu li a {
            text-decoration: none;
            color: inherit;
          }

          @media (min-width: 700px) {
            .ul-menu {
              justify-content: center;
              gap: 160px;
            }
          }
      `
  },
  {
    id: 2,
    component: <MenuTwo />,
    title: "NEXUS",
    reactCode: `
          'use client'

          import React, { useState } from 'react';
          import styles from "@/app/page.module.css"
          import { CiMenuBurger } from "react-icons/ci";
          import { IoMdClose } from 'react-icons/io';


          const MenuNexus = () => {
            const [isOpen, setIsOpen] = useState(false);

            const toggleMenu = () => {
              setIsOpen(!isOpen);
            };

            return (
              <div className={styles["div-general"]}>
                <button className={styles["button-deploy"]} onClick={toggleMenu}>
                  <CiMenuBurger />
                </button>

                <div
                  className={\`\${styles["overlay"]} \${isOpen ? styles["show"] : ""}\`}
                  onClick={() => setIsOpen(false)}
                ></div>

                <nav className={\`\${styles["nav-menu"]} \${isOpen ? styles["open"] : ""}\`}>
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
                  </ul>
                </nav>
              </div >
            );
          };

          export default MenuNexus; 
        `,
    javascripCode: `
          const menuToggle = document.getElementById("menu-toggle");
          const menu = document.getElementById("menu");
          const overlay = document.getElementById("menu-overlay");
          const menuClose = document.getElementById("menu-close");

          menuToggle.addEventListener("click", () => {
            menu.classList.toggle("open")
            overlay.classList.toggle("show")
          });

          overlay.addEventListener("click", () => {
              menu.classList.remove("open")
              overlay.classList.remove("show")
            });


          menuClose.addEventListener("click", () => {
              menu.classList.remove("open")
              overlay.classList.remove("show")
          });
          `,
    htmlCode: `
          <!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Menu Nexus</title>
            <link rel="stylesheet" href="styles.css">
          </head>
          <body>

            <div class="div-general">

              <button class="button-deploy" id="menu-toggle">
                &#9776; 
              </button>

              <div class="overlay" id="menu-overlay"></div>

              <nav class="nav-menu" id="menu">
                <button class="close-btn" id="menu-close">
                  &times;
                </button>
                <p class="icono">🍔</p>
                <ul class="ul-menu">
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Acerca de</a></li>
                  <li><a href="#">Contacto</a></li>
                </ul>
              </nav>
            </div>

            <script src="index.js"></script>
          </body>
          </html>
      `,
    cssCode: `
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }

          .div-general {
              width: 100%;
              background-color: rgb(96, 96, 96);
              padding: 10px;
          }

          .button-deploy {
              background: transparent;
              border: none;
              cursor: pointer;
              padding: 0.6rem;
              border-radius: 10px;
              transition: all 0.3s ease;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.8rem;
              color: #f5f5f5;
              position: relative;
              z-index: 1000;
          }

          .button-deploy:hover {
              background: rgba(255, 255, 255, 0.08);
              transform: scale(1.08);
              color: #ffffff;
          }

          .button-deploy:active {
              transform: scale(0.95);
              background: rgba(255, 255, 255, 0.2);
          }

          .nav-menu {
              position: fixed;
              top: 0;
              right: 0;
              width: 250px;
              height: 100%;
              background: black;
              transform: translateX(100%);
              opacity: 0;
              transition: all 0.5s ease;
              z-index: 1000;
              display: flex;
              flex-direction: column;
          }

          .nav-menu.open {
              transform: translateX(0);
              opacity: 1;
          }

          .ul-menu {
              display: flex;
              align-items: center;
              flex-direction: column;
              height: 100%;
              gap: 100px;
              margin-top: 150%;
          }

          .ul-menu li {
              list-style-type: none;
              color: rgb(255, 255, 255);
              font-size: 1em;
              font-family: sans-serif;
          }

          .ul-menu li a {
              text-decoration: none;
              color: inherit;
          }

          .icono {
              font-size: 2.8em;
              text-align: center;
              margin-top: 10%;
          }

          .overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              transition: opacity 0.3s ease;
              z-index: 999;
              display: none;
          }

          .overlay.show {
              opacity: 1;
              pointer-events: all;
              display: block;
          }

          .close-btn {
              position: absolute;
              top: 15px;
              right: 20px;
              background: transparent;
              border: none;
              color: white;
              font-size: 2rem;
              cursor: pointer;
              display: none;
              z-index: 1001;
          }

          @media (max-width: 800px) {
              .nav-menu {
                  width: 100%;
              }
              .ul-menu {
                  margin-top: 100%;
              }
              .close-btn {
                  display: block;
              }
          }
      `
  }
]