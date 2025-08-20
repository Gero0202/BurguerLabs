import Image from "next/image";
import styles from "./page.module.css";
import { Kanit, Dancing_Script } from "next/font/google";
import Contenedor from "./components/Contenedor";

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
          <button>Go!</button>
        </div>
      </div>
      {/* <Contenedor/> */}
    </>
  );
}
