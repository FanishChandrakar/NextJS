import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Theme from "@/utility/Theme";
import {
    Header as Container,
    HeaderFix,
    Slider,
    SliderText,
    Switch,
    SwitchInput,
} from "./Styled-Component";

const Header: NextPage = () => {
    /**
     * When mounted on client, now we can show the UI
     */
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;
    // -----

    const [isDark, toggleTheme] = Theme.Use();

    return (
        <>
            <Container>
                <Switch>
                    <SwitchInput
                        type="checkbox"
                        checked={isDark()}
                        onChange={toggleTheme}
                    />
                    <Slider round>
                        <SliderText>🌜</SliderText>
                        <SliderText>🌞</SliderText>
                    </Slider>
                </Switch>
            </Container>
            <HeaderFix />
        </>
    );
};

export default Header;
