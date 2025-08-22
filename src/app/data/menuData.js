import MenuOne from "../components/menus/MenuOne"

export const menuData = [
  {
    id: 1,
    component: <MenuOne />,
    title: "Clasico",
    reactCode: `
          'use client'
          import { useState } from "react";
          import styles from "./page.module.css";

          export default function Home() {
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
    component: <MenuOne />,
    title: "Menu ejemplo",
    reactCode: `
          import React, { useState } from 'react';
          
          const MenuClasico = () => {
            const [isOpen, setIsOpen] = useState(false);
          
            const toggleMenu = () => {
              setIsOpen(!isOpen);
            };
          
            return (
              <div>
                <button onClick={toggleMenu}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
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
        `,
    javascripCode: `
           const menuButton = document.getElementById('menuButton');
            const menuNav = document.getElementById('menuNav');

            menuButton.addEventListener('click', () => {
              if (menuNav.style.display === 'none') {
                menuNav.style.display = 'block';
              } else {
                menuNav.style.display = 'none';
              }
            });
          `,
    htmlCode: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Menu Clasico</title>
        </head>
        <body>

        <div>
          <button id="menuButton" aria-label="Toggle menu">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </button>

          <nav id="menuNav" style="display: none;">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        </div>
        </body>
        </html>
      `,
    cssCode: `
        .line {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px 0;
        background-color: #333;
        }

       button {
       background: none;
       border: none;
       cursor: pointer;
       padding: 10px;
      }

      nav {
      
      }
      `
  }
]