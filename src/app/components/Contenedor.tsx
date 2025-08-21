// components/MenuCard.jsx
import React, { ReactNode } from 'react';
import CodeTabs from './CodeTabs';

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
        <div className="menu-card">
            {/* El componente del menu de hamburguesas se renderiza aca, en el lugar de {children} */}
            <div className="menu-preview-interactive">
                {children}
            </div>

            <h3 className="menu-title">{title}</h3>
            <div className="code-container">
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