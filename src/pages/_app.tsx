import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer, Header } from "@/common";
import { StyledSetting, ThemeSetting } from "@/utility";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Global Finance</title>

                <link rel="manifest" href="/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    href="/icons/favicon-16x16.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-32x32.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    rel="apple-touch-icon"
                    href="/icons/apple-icon.png"
                ></link>
                <meta name="theme-color" content="#2388ff" />
            </Head>
            <ThemeSetting.Provider enableSystem={true} defaultTheme="system">
                <StyledSetting />
                <Header {...pageProps} />
                <Component {...pageProps} />
                <Footer {...pageProps} />
            </ThemeSetting.Provider>
        </>
    );
};
export default MyApp;
