import styled from "styled-components";
import { Media } from "../../utils/io";
import { Container } from "../styles/WrapStyles";
import { Header } from "./header";

export const Master = (props) => {
  const { children } = props;
  return (
    <Content>
      <Header />
      <Side>
        <Container align="left">SIDE</Container>
      </Side>
      <Wrapped>{children}</Wrapped>
    </Content>
  );
};
const Content = styled.div`
  display: grid;
  grid-template-areas:
    "head head"
    "nav  main"
    "nav  main";
  grid-template-rows: 64px 1fr 30px;
  grid-template-columns: 1fr 2fr;
  background: #f7f8fc;
  height: 100%;
  @media ${Media.mobile} {
    grid-template-areas:
      "head"
      "nav"
      "main";
    grid-template-rows: 56px 48px 1fr;
    grid-template-columns: 1fr;
  }
  @media ${Media.desktop} {
    grid-template-columns: 1fr 3fr;
  }
  @media ${Media.desktopL} {
    grid-template-columns: 2fr 4fr;
  }
  @media ${Media.desktopXL} {
    grid-template-columns: 3fr 5fr;
  }
`;
const Side = styled.div`
  grid-area: nav;
`;

const Wrapped = styled.div`
  grid-area: main;
  background: white;
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
