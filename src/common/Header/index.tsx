import type { NextPage } from "next";
import React from "react";
import styles from "@/styles/Header.module.css";
import Theme from "@/utility/Theme";

const Header: NextPage = () => {
    const [isDark, toggleTheme] = Theme.Use();

    return (
        <header className={`${styles.header}`}>
            <label className={`${styles.switch}`}>
                <input
                    type="checkbox"
                    checked={isDark()}
                    onChange={toggleTheme}
                />
                <span className={`${styles.slider} ${styles.round}`}>
                    <span>🌜</span>
                    <span>🌞</span>
                </span>
            </label>
        </header>
    );
};

export default Header;
