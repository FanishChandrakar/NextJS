import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { ThemeSetting } from "@/utility";
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

    const [isDark, toggleTheme] = ThemeSetting.Use();

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
