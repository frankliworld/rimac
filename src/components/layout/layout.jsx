import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Main>{children}</Main>
    </>
  );
};

const Main = styled.main`
  height: 100vh;
  overflow: hidden;
`