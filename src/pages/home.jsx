import { useEffect, useState } from "react";
import styled from "styled-components";
import Enrollment from "../components/cards/enrollment";
import { Master } from "../components/layout/master";
import {
  BodyMain,
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
import { useAppContext } from "../context/context";

const Home = () => {
  const {user} = useAppContext();
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(20);
  const [list, setList] = useState([]);

  const min = 12500;
  const max = 16500;

  useEffect(() => {
    setList(data.listCovering);
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      const newList = [...list];
      if (amount > 16000) {
        newList[1].disabled = true;
      } else {
        newList[1].disabled = false;
      }
      setList(newList);
      setPrice(20 + sumAdd());
    }
  }, [amount]);

  const updateList = (index, add) => {
    const newList = [...list];
    newList[index].add = !add;
    setList(newList);
    setPrice(20 + sumAdd());
  };

  const changeAmount = (value) => {
    setAmount(value);
  };

  const sumAdd = () =>
    list
      .filter((item) => item.add && !item.disabled)
      .reduce((acc, item) => acc + item.price, 0);

  return (
    <Master>
      <Container align="right">
        <Wrapped>
          <Section className="sec-1">
            <Back />
            <Title>
              ¡Hola, <Span>{user.name}!</Span>
            </Title>
            <Text>Conoce las coberturas para tu plan</Text>
            <Enrollment plaque={user.plaque}/>
            <Amount min={min} max={max} changeValue={(x) => changeAmount(x)} />
            <hr />
            <Subtitle>Agrega o quita coberturas</Subtitle>
            <ContentTabs data={list} onClick={updateList} />
          </Section>
          <Section className="sec-2">
            <Resume total={price} />
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
    &::-webkit-scrollbar {
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
      border-top: 1px solid #e6e6e6;
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

const ContentTabs = ({ data, onClick }) => (
  <>
    <Tabs defaultActiveKey="1">
      <TabPane key="1" active>
        Protege a tu auto
      </TabPane>
      <TabPane key="2">Protege a los que te rodean</TabPane>
      <TabPane key="3">mejora tu plan</TabPane>
    </Tabs>
    {data.map((item, index) => (
      <Covering key={index} {...item} add={(x) => onClick(index, x)} />
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
