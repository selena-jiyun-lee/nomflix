import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }

    body {
        font-family: "PT Sans", sans-serif;
        font-size: 14px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
    }
`;

export default globalStyles;
