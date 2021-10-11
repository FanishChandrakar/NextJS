import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: var(--background);
    color: var(--foreground);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
    -ms-overflow-style: none;
}

::-webkit-scrollbar {
    /* display: none; */
}

:root {
    /* Your default value */
    --headerHeight:10vh;
    --bodyHeight:80vh;
    --footerHeight:10vh;
    /* Your default theme */
    --background: #f3f5f9;
    --foreground: #18212b;
    --primary: #2388ff;
    --header: #0e1319;
}

[data-theme="dark"] {
    --background: #18212b;
    --foreground: #f3f5f9;
    --primary: #2388ff;
    --header: #0e1319;
}
`;
