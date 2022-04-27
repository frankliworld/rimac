import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Media } from "../../utils/io";
import Button from "../buttons/button";
import { TextSmall } from "../styles/TextStyles";

const Resume = (props) => {
  const { total } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/welcome");
  }
  return (
    <Wrapper>
      <Desk>
        <Title>MONTO</Title>
        <Price>${total.toFixed(2)}</Price>
        <Small>mensuales</Small>
        <hr />
        <Group>
          <Title2>El precio incluye:</Title2>
          <Item name="Llanta de respuesto" />
          <Item name="Analisis de motor" />
          <Item name="Aros gratis" />
        </Group>
      </Desk>
      <Mov>
        <Price>${total.toFixed(2)}</Price>
        <Small>mensuales</Small>
      </Mov>

      <Button title="LO QUIERO" style={{ width: "100%", margin: 0 }} onClick={handleClick} />
    </Wrapper>
  );
};
export default Resume;

const Wrapper = styled.div`
  @media ${Media.mobile} {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    align-items: center;
  }
`;
const Title = styled(TextSmall)`
  font-family: "Lato", sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Desk = styled.div`
  @media ${Media.mobile} {
    display: none;
  }
`;
const Mov = styled.div`
  display: none;
  @media ${Media.mobile} {
    display: block;
  }
`;
const Title2 = styled(Title)`
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 20px;
`;
const Price = styled(Title)`
  font-size: 28px;
  font-weight: normal;
`;
const Small = styled(TextSmall)`
  font-size: 12px;
  color: var(--Text2);
`;
const Group = styled.div`
  margin-bottom: 20px;
`;
const Text = styled(TextSmall)`
  color: var(--Text2);
  margin: 0;
`;
const Item = ({ name }) => {
  return (
    <CoverItem>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="#43B748">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.3178 3.92748C12.634 4.19503 12.6734 4.66827 12.4059 4.98447L6.90588 11.4845C6.76799 11.6474 6.56719 11.7439 6.3538 11.7497C6.14041 11.7556 5.93465 11.6702 5.78808 11.515L2.95474 8.51498C2.67033 8.21384 2.6839 7.73916 2.98503 7.45476C3.28617 7.17035 3.76085 7.18391 4.04526 7.48505L6.30263 9.87521L11.2608 4.01556C11.5284 3.69935 12.0016 3.65992 12.3178 3.92748Z"
        />
      </svg>

      <Text>{name}</Text>
    </CoverItem>
  );
};
const CoverItem = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  align-items: center;
  margin-bottom: 16px;
`;
