import type { NextPage } from "next";
import Image from "next/image";

import { Footer as Container, LogoView, PoweredBy } from "./Styled-Component";

const Footer: NextPage = () => {
    return (
        <Container>
            <PoweredBy
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{" "}
                <LogoView>
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        width={72}
                        height={16}
                    />
                </LogoView>
            </PoweredBy>
        </Container>
    );
};

export default Footer;
