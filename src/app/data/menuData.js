import MenuPrueba from "../components/menus/MenuPrueba"

export const menuData = [
    {
        id: 1,
        component: <MenuPrueba />,
        title: "Menu ejemplo2",
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
         /* Estilos para la barra de navegación que se muestra */
         /* Por ejemplo, display: flex; flex-direction: column; */
         }
      `
    },
    {
        id: 2,
        component: <MenuPrueba />,
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