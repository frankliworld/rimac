import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  BodyMain,
  TextSmall,
} from "../components/styles/TextStyles";
import ImageWelcome from "../assets/icons/graph-welcome.svg";
import { Header } from "../components/layout/header";
import { Media } from "../utils/io";
import Button from "../components/buttons/button";
import { Container } from "../components/styles/WrapStyles";
const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.localStorage.removeItem("auth");
    navigate("/login");
  }
  return (
    <Wrapper>
      <Header />
      <CustomContainer align="center">
        <WrappedImage className="image">
          <Image src={ImageWelcome} />
        </WrappedImage>
        <Section className="section">
          <Title>
            <Span>¡Te damos la bienvenida! </Span>
            Cuenta con nosotros para proteger tu vehículo
          </Title>
          <Text lighter ms>
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo:
          </Text>
          <Text>joel.sanchez@gmail.com</Text>
          <Button title="cómo usar mi seguro" onClick={handleClick} />
        </Section>
      </CustomContainer>
    </Wrapper>
  );
};
export default Welcome;

const Wrapper = styled.div`
  height: 100%;
`;
const WrappedImage = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  align-items: center;
  &::before {
    position: absolute;
    right: 20%;
    top: 0;
    content: "";
    display: flex;
    width: 500%;
    height: 100%;
    background: #f7f8fc;
    z-index: -1;
  }
`;
const Image = styled.img``;
const Title = styled(BodyMain)`
  font-size: 36px;
  @media ${Media.mobile} {
    font-size: 28px;
  }
`;
const Span = styled.span`
  color: var(--Primary);
  margin-right: 100%;
`;
const Text = styled(TextSmall)`
  font-size: 16px;
  color: var(--Text2);
  ${(props) => props.lighter && `font-weight: lighter;`}
  ${(props) => props.ms && `margin-bottom: 10px;`}
`;
const CustomContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(35, 1fr);
  align-items: center;
  .image {
    grid-column-start: 1;
    grid-column-end: span 12;
  }
  .section {
    grid-column-start: 17;
    grid-column-end: span 15;
  }
  @media ${Media.mobile} {
    grid-template-rows: repeat(3, 1fr);
    .image{
      grid-row-start: 1;
      grid-row-end: span 1;
      grid-column-start: 1;
      grid-column-end: span 35;
    }
    .section {
      grid-row-start: 2;
      grid-row-end: span 2;
      grid-column-start: 1;
      grid-column-end: span 35;
    }
  }
`;
const Section = styled.section``;
