import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Colors from "./Colors";

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing:border-box;
        &:focus {
            outline: none;
        }
    }
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        color: ${Colors.text.primary};
        background-color:${Colors.bg.primary};
        padding-top: 80px;
    }
    a {
        text-decoration:none;
        color:inherit;
    }
    button {
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyles;
