import styled from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyle";
import "./layout.css";
import "antd/dist/antd.css";

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
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  overflow: hidden;
`