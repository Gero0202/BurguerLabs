import MenuOne from "../components/menus/MenuOne"
import MenuTwo from "../components/menus/MenuTwo"
import MenuThree from "../components/menus/MenuThree"
import MenuFour from "../components/menus/MenuFour"
import MenuFive from "../components/menus/MenuFive"
import MenuSix from "../components/menus/MenuSix"

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
    javascriptCode: `
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
            <title>Menu Classic</title>
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
    javascriptCode: `
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
  },
  {
    id: 3,
    title: "VERTEX",
    component: <MenuThree />,
    reactCode: `
          'use client'

          import React, { useState } from 'react';
          import styles from "@/app/page.module.css"
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
    `,
    javascriptCode: `
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
            <title>Menu Vertex</title>
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
                  <div class="div-search">
                    <li>
                      <input type="text" class="input-search" placeholder="Search" />
                    </li>
                    <li>
                      <button class="button-search">Submit</button>
                    </li>
                  </div>
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

            .div-general{
                width: 100%;
                background-color: rgb(96, 96, 96);
                padding: 10px;
                display: flex;
                justify-content: flex-end;
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
              left: 0;
              width: 260px;
              height: 100%;
              background: black;
              transform: translateX(-100%);
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

            .ul-menu{
                display: flex;
                align-items: center;
                flex-direction: column;
                height: 100%;
                gap: 80px;
                margin-top: 155%;
            }

            .ul-menu li{
                list-style-type: none;
                color: rgb(255, 255, 255);
                font-size: 1em;
                font-family: sans-serif;
            }

            .ul-menu li a{
                text-decoration: none;
                color: inherit;
            }

            .icono{
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
              background-color: rgba(0,0,0,0.5); 
              display: none;
              transition: opacity 0.3s ease;
              z-index: 998;
            }

            .overlay.show {
              opacity: 1;
              pointer-events: all;
              display: block;
            }

            .close-btn{
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


            .div-search {
              display: flex;
              align-items: center;
              gap: 6px;
              padding: 4px 6px;
            }

            .input-search {
              flex: 1;
              padding: 6px 8px;
              font-size: 0.8rem;
              border: 1px solid rgba(255, 255, 255, 0.15);
              border-radius: 6px;
              background: rgba(255, 255, 255, 0.08);
              color: #fff;
              outline: none;
              transition: border 0.2s, background 0.2s;
            }

            .input-search:focus {
              border: 1px solid #ffffff; /* azul tecnológico */
              background: rgba(255, 255, 255, 0.12);
            }

            .button-search {
              padding: 6px 10px;
              font-size: 0.8rem;
              border: none;
              border-radius: 6px;
              background: linear-gradient(135deg, #ffffff, #a3a3a3);
              color: #000000;
              cursor: pointer;
              transition: background 0.2s, transform 0.1s;
            }

            .button-search:hover {
              background: linear-gradient(135deg, #ffffff, #757575);
            }

            .button-search:active {
              transform: scale(0.95);
            }



            @media (max-width: 800px) {
                .nav-menu{
                    width: 100%;
                }
                .ul-menu{
                    gap: 48px;
                    margin-top: 115%;
                }
                .close-btn{
                    display: block;
                }
            }
    `
  },
  {
    id: 4,
    component: <MenuFour />,
    title: "AXIS",
    reactCode: `
          'use client'

          import React, { useState } from 'react';
          import styles from "@/app/page.module.css"
          import { CiMenuBurger } from "react-icons/ci";
          import { IoMdClose } from 'react-icons/io';


          const MenuAxis = () => {
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

          export default MenuAxis;
    `,
    javascriptCode: `
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
            <title>Menu Axis</title>
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
           *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
                
            .div-general {
                width: 100%;
                background-color: rgb(96, 96, 96);
                border-radius: 0px;
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
                  display: none;
                  transition: opacity 0.3s ease;
                  z-index: 998;
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
                  .div-general {
                      position: relative;
                      border-radius: 0px;
                  }

                  .nav-menu {
                      position: absolute;
                      top: 100%;
                      left: 0;
                      right: 0;
                      width: 100%;
                      margin: 0 auto;
                      height: auto;
                      background-color: #303030;
                      border-radius: 0 0 12px 12px;
                      transform: translateY(-20px);
                      opacity: 0;
                      transition: all 0.3s ease;
                      padding: 20px 0;
                      z-index: 1000;
                  }

                  .nav-menu.open {
                      transform: translateY(0);
                      opacity: 1;
                  }

                  .ul-menu {
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      gap: 18px;
                      margin: 0;
                      height: auto;
                      padding: 0;
                  }

                  .ul-menu li {
                      font-size: 1.2em;
                  }

                  .icono {
                      margin-top: 0;
                      font-size: 2em;
                  }

                  .overlay {
                      display: none;
                  }
              }
    `
  },
  {
    id: 5,
    title: "LOCUS",
    component: <MenuFive />,
    reactCode: `
        'use client'

        import React, { useState } from 'react';
        import styles from "@/app/page.module.css"
        import { CiMenuBurger } from "react-icons/ci";
        import { IoMdClose } from 'react-icons/io';
        import { IoMdCart } from "react-icons/io";
        import { FaUser } from "react-icons/fa";


        const MenuLocus = () => {
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
                  <li><a className={styles["user-icon"]} href="#"><FaUser /></a></li>
                  <li><a className={styles["cart-icon"]} href="#"><IoMdCart /></a></li>
                </ul>
              </nav>
            </div >
          );
        };

        export default MenuLocus;
    `,
    javascriptCode: `
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
    ` ,
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
              gap: 70px;
              margin-top: 110%;
          }

          .ul-menu li {
              list-style-type: none;
              color: rgb(255, 255, 255);
              font-size: 1em;
              font-family: 'Courier New', Courier, monospace;
              
              
          }


          .ul-menu li a {
              text-decoration: none;
              color: inherit;
              display: inline-block;
              transition: transform 0.3s ease-in-out;
          }

          .ul-menu li a:hover{
              transform: scale(1.2);
          }

          .cart-icon{
              font-size: 1.8em;
          }

          .user-icon{
              font-size: 1.5em;
          }

          .icono {
              font-size: 2.8em;
              width: 70px;
              height: 50px;
              text-align: center;
              margin: 0 auto;
              margin-top: 10%;
              cursor: pointer;
              transition: transform 0.2s ease-in-out;
          }

          .icono:hover{
              transform: scale(1.1);
          }

          .overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              display: none;
              transition: opacity 0.3s ease;
              z-index: 998;
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
              .div-general {
                  position: relative;
                  border-radius: 0px;
              }

              .nav-menu {
                  position: absolute;
                  top: 100%;
                  left: 0;
                  right: 0;
                  width: 100%;
                  margin: 0 auto;
                  height: auto;
                  background-color: #303030;
                  border-radius: 0 0 12px 12px;
                  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
                  transform: translateY(-20px);
                  opacity: 0;
                  transition: all 0.3s ease;
                  padding: 20px 0;
                  z-index: 1000;
              }

              .nav-menu.open {
                  transform: translateY(0);
                  opacity: 1;
              }

              .ul-menu {
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  gap: 18px;
                  margin: 0;
                  height: auto;
                  padding: 0;
              }

              .ul-menu li {
                  font-size: 1.1em;
              }

              .icono {
                  display: none;
              }

              .overlay {
                  display: none;
              }
          }
    ` ,
    htmlCode: `
          <!DOCTYPE html>
          <html lang="es">

          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Menu Locus</title>
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
                  <li><a class="user-icon" href="#">👤</a></li>
                <li><a class="cart-icon" href="#">🛒</a></li>
                </ul>
              </nav>
            </div>

            <script src="index.js"></script>
          </body>

          </html>
    ` ,

  },
  {
    id: 6,
    title: "VECTOR",
    component: <MenuSix/>,
    reactCode: `
         'use client'

          import React, { useState } from 'react';
          import styles from "@/app/page.module.css"
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
                    <li><a className={styles["user-icon"]} href="#"><FaUser /></a></li>
                    <li><a className={styles["cart-icon"]} href="#"><IoMdCart /></a></li>
                  </ul>
                </nav>
              </div >
            );
          };

          export default MenuVector;
    `,
    javascriptCode: `
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
          <title>Menu Vector</title>
          <link rel="stylesheet" href="styles.css">
        </head>

        <body>

          <div class="div-general">

            <div class="div-menu-butons">
              <button class="button-deploy" id="menu-toggle">
                &#9776;
              </button>
              <div class="auth-buttons">
                <button class="btn-signin">Sign in</button>
                <button class="btn-register">Register</button>
              </div>
            </div>

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
                <li><a class="user-icon" href="#">👤</a></li>
                <li><a class="cart-icon" href="#">🛒</a></li>
              </ul>
            </nav>
          </div>

          <script src="index.js"></script>
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
              padding: 2px;
          }

          .button-deploy {
              background: transparent;
              border: none;
              cursor: pointer;
              padding: 1rem;
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
              gap: 85px;
              margin-top: 120%;
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

          .cart-icon {
              font-size: 1.8em;
          }

          .user-icon {
              font-size: 1.4em;
          }

          .overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.5);
              display: none;
              transition: opacity 0.3s ease;
              z-index: 998;
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

          .auth-buttons {
              display: flex;
              flex-direction: row;
              gap: 10px;
              margin: auto;
              margin-left: 77%;
              width: 45%;
          }

          .btn-signin,
          .btn-register {
              padding: 9px 15px;
              border-radius: 8px;
              border: 1px solid #f5f5f5;
              background: transparent;
              color: #f5f5f5;
              font-size: 0.90rem;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.3s ease;
              text-align: center;
          }

          .btn-signin:hover {
              background: rgba(255, 255, 255, 0.1);
          }

          .btn-register {
              background: #ffffff;
              border: none;
              color: rgb(0, 0, 0);
          }

          .btn-register:hover {
              background: #000000;
              color: #ffffff;
          }

          .div-menu-butons {
              display: flex;
          }

          @media (max-width: 800px) {
              .nav-menu {
                  width: 100%;
              }

              .ul-menu {
                  margin-top: 60%;
                  gap: 90px;
              }

              .close-btn {
                  display: block;
              }

              .auth-buttons {
                  margin-left: 43%;
              }

              .btn-signin,
              .btn-register {
                  padding: 9px;
              }
          }
    `
  }
]