import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/buttons/button";
import Enrollment from "../components/cards/enrollment";
import { Master } from "../components/layout/master";
import {
  BodyMain,
  H1,
  MediumText,
  TextSmall,
} from "../components/styles/TextStyles";
import { Media } from "../utils/io";
import { Container } from "../components/styles/WrapStyles";
import { IconBack } from "../components/icons";
import Amount from "../components/cards/amount";
import Covering from "../components/cards/covering";
import data from "../services/data";
import Resume from "../components/cards/resume";

const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(data.listCovering);
  }, []);

  return (
    <Master>
      <Container align="right">
        <Wrapped>
          <Section className="sec-1">
            <Back />
            <Title>
              ¡Hola, <Span>Frank!</Span>
            </Title>
            <Text>Conoce las coberturas para tu plan</Text>
            <Enrollment />
            <Amount />
            <hr />
            <Subtitle>Agrega o quita coberturas</Subtitle>
            <ContentTabs data={list} />
          </Section>
          <Section className="sec-2">
            <Resume/>
          </Section>
        </Wrapped>
      </Container>
    </Master>
  );
};
export default Home;

const Wrapped = styled.div`
  display: grid;
  grid-template-areas:
    "sec-1 sec-2"
    "sec-1 sec-2";
  grid-template-rows: 1fr 76px;
  grid-template-columns: repeat(28, 1fr);
  height: 100%;
  .sec-1 {
    grid-area: sec-1;
    grid-column-start: 4;
    grid-column-end: span 12;
    overflow: auto;
    padding: 40px 0;
    display: grid;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
  .sec-2 {
    grid-area: sec-2;
    grid-column-start: 19;
    grid-column-end: span 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media ${Media.mobile} {
    grid-template-areas:
      "sec-1 sec-1"
      "sec-2 sec-2";

    .sec-1 {
      grid-column-start: 3;
      grid-column-end: span 27;
    }
    .sec-2 {
      grid-column-start: 3;
      grid-column-end: span 27;
      display: flex;
    }
  }
`;
const Section = styled.section``;
const Title = styled(BodyMain)`
  font-size: 40px;
  margin-bottom: 10px;
`;
const Subtitle = styled(MediumText)`
  font-family: "Lato", sans-serif;
`;
const Span = styled.span`
  color: var(--Primary);
`;
const Text = styled(TextSmall)`
  color: var(--Text2);
  margin-bottom: 40px;
`;
const Back = () => (
  <WrappedBack>
    <IconBack />
    <Text style={{ margin: 0 }}>VOLVER</Text>
  </WrappedBack>
);
const WrappedBack = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  gap: 10px;
`;

const ContentTabs = ({ data }) => (
  <>
    <Tabs defaultActiveKey="1">
      <TabPane key="1" active>
        Protege a tu auto
      </TabPane>
      <TabPane key="2">Protege a los que te rodean</TabPane>
      <TabPane key="3">mejora tu plan</TabPane>
    </Tabs>
    {data.map((item, index) => (
      <Covering key={index} {...item} />
    ))}
  </>
);
const Tabs = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
  border-bottom: 1px solid #e4e8f7;
`;
const TabPane = styled.div`
  cursor: pointer;
  padding: 16px;
  text-transform: uppercase;
  text-align: center;
  font-size: 10px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  line-height: 1.6;
  ${(props) =>
    props.active &&
    `
    color: var(--Primary);
    border-bottom: 2px solid var(--Primary);
  `}
`;
