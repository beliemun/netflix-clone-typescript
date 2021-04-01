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
        padding-top: 90px;
        &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.15);
    &:hover {
      height: 12px;
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:active {
      height: 12px;
      background-color: ${Colors.secondary};
    }
  }
    }
    a {
        text-decoration:none;
        color:inherit;
    }
    button {
        &:focus {
            outline: none;
        }
        border-style:none;
    }
    input {
      color:inherit;
      background:none;
      border-style:none;
      border:0;
      padding:0;
      margin:0;
    }
`;

export default GlobalStyles;
