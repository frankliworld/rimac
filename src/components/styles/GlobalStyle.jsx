import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  *, *::before, *:after {
    outline: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background: rgba(111, 125, 255, .2);
    border-radius: 10px;
  }
  body {
    background: white;
    @media (prefers-color-scheme: dark) {
     
    }
      
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }
  input, textarea {
    transition: 1s cubic-bezier(.17, .67, .83, .67);
  }
  input:focus, textarea:focus {
    outline: none !important;
    border-color: var(--Secondary);
  }
`;
