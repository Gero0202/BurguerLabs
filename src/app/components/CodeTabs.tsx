'use client'

import React, { useState } from "react";
import styles from "@/app/css/codetabs.module.css"

interface CoderTabsProps {
    reactCode: string;
    javascriptCode: string;
    cssCode: string;
    htmlCode: string
}

const CodeTabs: React.FC<CoderTabsProps> = ({ reactCode, javascriptCode, cssCode, htmlCode }) => {
    const [activeTab, setActiveTab] = useState('react')

    const renderCode = () => {
        switch (activeTab) {
            case 'react':
                return <pre><p>{reactCode}</p></pre>
            case 'javascript':
                return <pre><p>{javascriptCode}</p></pre>
            case 'html':
                return <pre><p>{htmlCode}</p></pre>
            case 'css':
                return <pre><p>{cssCode}</p></pre>
            default:
                break;
        }
    }

    return (
        <>
            <div className={styles["code-tabs-container"]}>
                <div className={styles["tabs-buttons"]}>
                    <button
                        onClick={() => setActiveTab('react')}
                        className={activeTab === 'react' ? 'active' : ''}
                    >
                        React
                    </button>
                    <button
                        onClick={() => setActiveTab('javascript')}
                        className={activeTab === 'javascript' ? 'active' : ''}
                    >
                        JavaScript
                    </button>
                    <button
                        onClick={() => setActiveTab('html')}
                        className={activeTab === 'html' ? 'active' : ''}
                    >
                        HTML
                    </button>
                    <button
                        onClick={() => setActiveTab('css')}
                        className={activeTab === 'css' ? 'active' : ''}
                    >
                        CSS
                    </button>
                </div>
                <div className={styles["code-content"]}>
                    {renderCode()}
                </div>
            </div>
        </>
    )
}

export default CodeTabs