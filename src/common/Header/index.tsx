import type { NextPage } from "next";
import React from "react";
import styles from "@/styles/Header.module.css";
import { useTheme } from "next-themes";

const Header: NextPage = () => {
    const { theme, setTheme } = useTheme();

    return (
        <header className={`${styles.header}`}>
            <label className={`${styles.switch}`}>
                <input
                    type="checkbox"
                    checked={theme === "dark"}
                    onChange={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                    }
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
