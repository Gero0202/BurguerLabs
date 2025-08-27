# 🍔 Menu Hamburguesa React / Next.js 

Este proyecto es una colección de menus hamburguesa desarrollados con Next.js y React, cada uno con su respectivo codigo en HTML, CSS, JavaScript y JSX. Todos los menus son responsive y adaptables, cambiando su comportamiento segun el tamaño de pantalla.

---

## 🎨 Caracteristicas principales

- Diferentes estilos de menu hamburguesa
- Cada menu incluye su codigo completo en: 
  - HTML
  - CSS
  - JavaScript
  - JSX (React)
- Los menús en React utilizan la librería [react-icons](https://www.npmjs.com/package/react-icons).
- Totalmente responsive: cada menu adapta su diseño segun el tamaño de pantalla.
- Implementacion modular: cada menu es un componente independiente.
- Basado en Next.js, lo que permite optimización, routing y SSR.

---
## 🚀 Deploy 
- [Vercel](https://burguer-labs.vercel.app/).

---

## 🤝 Como colaborar

Si deseas agregar un nuevo menú:

1. Crear un nuevo componente dentro de la carpeta `menus`.
2. Crear el archivo CSS correspondiente dentro de la carpeta de CSS/menues.
3. Agregar el nuevo menu al objeto `menuData.js` incluyendo:
   - `id`
   - `title`
   - `component`
   - Código en HTML (htmlCode), CSS (cssCode), JavaScript (javascriptCode) y JSX (reactCode).
4. Probar el menu en archivos en blanco:
   - Un archivo HTML + CSS + JS independiente.
   - Un archivo JSX independiente para React/Next.js.

> Esto asegura que cada menu funcione de manera aislada antes de integrarlo al proyecto principal.

---

## 💡 Tips de integracion

- Cada menu funciona independientemente, probarlo en un entorno limpio antes de integrarlo.
- Para Next.js, los estilos se importan como modulos CSS (import styles from "@/app/css/menues/menufive.module.css").
- Asegurate de que el menu sea responsive, usando @media queries según tu diseño.


---

## 🛠 Requisitos

- Node.js  
- Next.js 13+  
- React 18+  

```bash
- Instalar dependencias: npm install react-icons
```

🚀 Uso

1. Clonar repositorio: 
```bash
git clone <repo-url>
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo
```bash
npm run dev
```

4. Acceder a los menus desde menuData.js o creando un nuevo componente.


## 🙏 Creditos

- **Desarrollador:** Geronimo Tortosa  
