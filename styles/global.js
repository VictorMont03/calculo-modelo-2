import { createGlobalStyle } from "styled-components";
import "../node_modules/hamburgers/dist/hamburgers.css";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
  html,
  body, #__next {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
   
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button, input, textarea {
    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
