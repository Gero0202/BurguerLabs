import React, { ReactNode } from 'react';
import CodeTabs from './CodeTabs';
import styles from "@/app/css/contenedor.module.css"
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],  // adapta si tienes otros subsets
  weight: '400',       // adapta a los pesos que necesites
  style: 'normal'
});

interface MenuCardsProps {
    title: string;
    reactCode: string;
    javascriptCode: string
    cssCode: string
    children: ReactNode
    htmlcode: string
}

const MenuCard: React.FC<MenuCardsProps> = ({
    title, 
    reactCode, 
    javascriptCode, 
    cssCode, 
    htmlcode, 
    children 
}) => {
    return (
        <div className={styles["menu-card"]}>
            <div className={styles["children-texto"]}>
            <div className={styles["menu-preview-interactive"]}>
                {children}
            </div>

            <h3 className={styles["menu-title"]}>{title}</h3>
            </div>
            <div className={styles["code-container"]}>
                <CodeTabs
                reactCode={reactCode}
                javascriptCode={javascriptCode}
                htmlCode={htmlcode}
                cssCode={cssCode}
                />
            </div>
        </div>
    );
};

export default MenuCard;