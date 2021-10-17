import { createGlobalStyle } from "styled-components";
import { Color } from ".";

export default createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-color: var(--backgroundColor);
    color: var(--foregroundColor);
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
    --headerColorHeight: 70px;
    --footerHeight: 70px;
    --bodyHeight: calc(100vh - ( var(--headerColorHeight) + var(--footerHeight) ));
    /* Default Theme */
    --backgroundColor: ${Color.catskillWhite};
    --foregroundColor: ${Color.stoneBlack};
    --primaryColor: ${Color.dodgerBlue};
    --headerColor: ${Color.bunkerBlack};
}

[data-theme="dark"] {
    --backgroundColor: ${Color.stoneBlack};
    --foregroundColor: ${Color.catskillWhite};
    --primaryColor: ${Color.dodgerBlue};
    --headerColor: ${Color.bunkerBlack};
}
`;
