import styled from "styled-components";
import { Media } from "../../utils/io";
import { TextSmall } from "../styles/TextStyles";
import { Container } from "../styles/WrapStyles";
import { Header } from "./header";

export const Master = (props) => {
  const { children } = props;
  return (
    <Content>
      <Header />
      <Side />
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
    grid-template-columns: 1fr 4fr;
  }
  @media ${Media.desktopL} {
    grid-template-columns: 1fr 4fr;
  }
  @media ${Media.desktopXL} {
    grid-template-columns: 1fr 4fr;
  }
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

const Side = () => (
  <WrappedSide align="left">
    <Item value="1" label="Datos" />
    <Item value="2" label="Arma tu plan" />
    <Mov>
      <Text>Paso 2 de 2</Text>
    </Mov>
  </WrappedSide>
);
const WrappedSide = styled(Container)`
  grid-area: nav;
  padding-top: 20px;
  padding-bottom: 20px;
  @media ${Media.mobile} {
    padding-top: 0;
    padding-bottom: 0;
    display: grid;
    place-items: center;
  }
`;

const Item = ({ value, label }) => (
  <WrappedItem>
    <Dot>{value}</Dot>
    <Text>{label}</Text>
  </WrappedItem>
);
const WrappedItem = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
  color: var(--Text2);
  @media ${Media.mobile} {
    display: none;
  }
`;
const Text = styled(TextSmall)`
  margin: 0;
  color: currentColor;
  font-family: "Lato", sans-serif;
`;
const Mov = styled.div`
  display: none;
  @media ${Media.mobile} {
    display: block;
  }
`;
const Dot = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 1px solid var(--Secondary);
  display: grid;
  place-content: center;
`;
