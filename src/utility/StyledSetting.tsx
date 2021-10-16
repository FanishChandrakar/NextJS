import { createGlobalStyle } from "styled-components";
import { Color } from ".";

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
    /* Default Value */
    --headerHeight: 70px;
    --footerHeight: 70px;
    --bodyHeight: calc(100vh - ( var(--headerHeight) + var(--footerHeight) ));
    /* Default Theme */
    --background: ${Color.catskillWhite};
    --foreground: ${Color.mirageBlack};
    --primary: ${Color.dodgerBlue};
    --header: ${Color.bunkerBlack};
}

[data-theme="dark"] {
    --background: ${Color.mirageBlack};
    --foreground: ${Color.catskillWhite};
    --primary: ${Color.dodgerBlue};
    --header: ${Color.bunkerBlack};
}
`;
