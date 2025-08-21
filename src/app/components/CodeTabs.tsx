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
                return <pre><code>{reactCode}</code></pre>
            case 'javascript':
                return <pre><code>{javascriptCode}</code></pre>
            case 'html':
                return <pre><code>{htmlCode}</code></pre>
            case 'css':
                return <pre><code>{cssCode}</code></pre>
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