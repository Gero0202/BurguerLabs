import Image from "next/image";
import styles from "./page.module.css";
import { Kanit, Dancing_Script } from "next/font/google";
import Contenedor from "./components/Contenedor";
import { menuData } from "@/app/data/menuData"

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["800"]
})

const edu = Dancing_Script({
  weight: ["400"]
})

export default function Home() {
  return (
    <>
      <div className={styles["div-home-principal"]}>
        <p className={`${styles["titulo-principal"]} ${kanit.className}`}>
          BURGUER LABS
        </p>

        <div className={`${styles["div-text-button"]} ${edu.className}`}>
          <p>Easy to integrate, responsive, and fully customizable.</p>
          <a href="#first-card">
            <button>Go!</button>
          </a>
        </div>
      </div>
      <div className={styles["cards-section"]}>
        {menuData.map((menu, index) => (
          <div id={index === 0 ? "first-card" : undefined} key={menu.id}>
          <Contenedor
            // key={menu.id}
            children={menu.component}
            title={menu.title}
            reactCode={menu.reactCode}
            javascriptCode={menu.javascripCode}
            htmlcode={menu.htmlCode}
            cssCode={menu.cssCode}
          />
          </div>
        ))}
      </div>
      <footer className={styles["footer"]}>
        <p>Creado por Geronimo Tortosa</p>
      </footer>
    </>
  );
}
