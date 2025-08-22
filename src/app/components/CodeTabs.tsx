'use client'

import React, { useState } from "react";
import styles from "@/app/css/codetabs.module.css"
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

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
                        style={{
                            borderColor: activeTab === 'react' ? "rgba(31, 212, 244, 1)" : "#444"
                        }}
                    >
                        <FaReact color="rgba(31, 212, 244, 1)" />
                    </button>

                    <button
                        onClick={() => setActiveTab('javascript')}
                        style={{
                            borderColor: activeTab === 'javascript' ? "rgba(224, 238, 31, 1)" : "#444"
                        }}
                    >
                        <SiJavascript color="rgba(224, 238, 31, 1)" />
                    </button>

                    <button
                        onClick={() => setActiveTab('html')}
                        style={{
                            borderColor: activeTab === 'html' ? "rgba(255, 144, 25, 1)" : "#444"
                        }}
                    >
                        <SiHtml5 color="rgba(255, 144, 25, 1)" />
                    </button>

                    <button
                        onClick={() => setActiveTab('css')}
                        style={{
                            borderColor: activeTab === 'css' ? "rgba(47, 123, 255, 1)" : "#444"
                        }}
                    >
                        <SiCss3 color="rgba(47, 123, 255, 1)" />
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