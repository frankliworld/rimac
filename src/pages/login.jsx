import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/buttons/button";
import { GraphMain } from "../components/icons";
import CheckBox from "../components/inputs/CheckBox";
import Input from "../components/inputs/input";
import { Header } from "../components/layout/header";
import {
  BodyIntro,
  BodyMain,
  TextSmall,
} from "../components/styles/TextStyles";
import { Container, Grid } from "../components/styles/WrapStyles";
import { Media } from "../utils/io";
import Bg from "../assets/icons/bg-graph-main.svg";
import { message } from "antd";
import { useAppContext } from "../context/context";
import users from "../services/users";

const Login = () => {
  return (
    <LoginContainer>
      <Header sticky />
      <CustomContainer align="center">
        <Section className="sec-1">
          <MainIntro />
        </Section>
        <Section className="sec-2">
          <Form />
        </Section>
        <By>© 2021 RIMAC Seguros y Reaseguros.</By>
      </CustomContainer>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100%;
`;
const CustomContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(35, 1fr);
  align-items: center;
  .sec-1 {
    display: grid;
    grid-column-start: 2;
    grid-column-end: span 10;
    height: 100%;
    align-items: center;
  }
  .sec-2 {
    grid-column-start: 21;
    grid-column-end: span 10;
  }
  @media ${Media.mobile} {
    grid-template-rows: repeat(3, 1fr);
    .sec-1 {
      grid-row-start: 1;
      grid-row-end: span 1;
      grid-column-start: 1;
      grid-column-end: span 35;
    }
    .sec-2 {
      grid-row-start: 2;
      grid-row-end: span 2;
      grid-column-start: 1;
      grid-column-end: span 35;
    }
  }
`;
const Section = styled.section`
  position: relative;
`;
const MainIntro = () => (
  <IntroWrapped>
    <BgImage src={Bg} />
    <GraphMain />
    <Group>
      <TagName>¡NUEVO!</TagName>
      <Intro>
        Seguro <Span>Vehicular Tracking</Span>
      </Intro>
      <Text>Cuentanos donde le haras seguimiento a tu seguro</Text>
    </Group>
  </IntroWrapped>
);
const IntroWrapped = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Media.mobile} {
    background: #f7f8fc;
    flex-direction: row-reverse;
    padding-top: 56px;
    justify-content: space-between;
    align-items: center;
  }
`;
const By = styled.div`
  position: absolute;
  bottom: 20px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #a3abcc;
  @media ${Media.mobile} {
    display: none;
  }
`;
const BgImage = styled.img`
  position: absolute;
  right: -30%;
  top: 0;
  z-index: -1;
  min-width: 800px;
  max-width: none;
  @media ${Media.mobile} {
    display: none;
  }
`;
const Group = styled.div`
  @media ${Media.mobile} {
    padding-right: 40px;
  }
`;
const Intro = styled(BodyIntro)`
  @media ${Media.mobile} {
    font-size: 28px;
  }
`;
const Span = styled.span`
  color: var(--Primary);
`;
const Text = styled(TextSmall)``;
const TagName = styled(TextSmall)`
  margin-bottom: 10px;
  font-weight: bold;
  font-family: "Lato", sans-serif;
`;
const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { dispatch } = useAppContext();
  const [data, setData] = useState({});
  const [checked, setChecked] = useState(false);
  const [formStatus, setFormStatus] = useState({
    document: {
      invalid: false,
      message: "Ingrese un documento de identidad valido de 8 digitos",
    },
    phone: {
      invalid: false,
      message: "Ingrese un número de teléfono válido de 9 dígitos",
    },
    plaque: {
      invalid: false,
      message:
        "Ingrese una placa válida de 6 a 8 dígitos, en mayúsculas ejemplo: ABC-123",
    },
  });

  useEffect(() => {
    handleGetUser();
  }, []);

  const handleGetUser = async () => {
    // 1 - 10 users val random
    const random = Math.floor(Math.random() * 10) + 1;
    try {
      const res = await users.getUser(random);
      const newObj = {
        ...res,
        phone: "",
      };
      setData(newObj);
    } catch (e) {
      console.log(e.message);
    }
  };

  const hangleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleDocument = (d) => /^[0-9]{8}$/.test(d);
  const handlePhone = (p) => /^[0-9]{9}$/.test(p);
  const handlePlaque = (p) => /^[0-9A-Z]{3}-[0-9A-Z]{3}$/.test(p);

  const validate = () => {
    const { document, phone, plaque } = data;
    try {
      if (!handleDocument(document)) {
        throw formStatus.document.message;
      }
      if (!handlePhone(phone)) {
        throw formStatus.phone.message;
      }
      if (!handlePlaque(plaque)) {
        throw formStatus.plaque.message;
      }
      if (!checked) {
        throw "Debe aceptar los términos y condiciones";
      }
      return true;
    } catch (e) {
      message.error(e);
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      window.localStorage.setItem("auth", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
      e.target.reset();
      navigate(from, { replace: true });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Tilte>Déjanos tus datos</Tilte>
      <Input
        name="document"
        type="number"
        placeholder="Nro. de doc"
        onChange={hangleChange}
        invalid={data.document && !handleDocument(data.document)}
        message={formStatus.document.message}
      />
      <Input
        name="phone"
        type="text"
        placeholder="Celular"
        onChange={hangleChange}
        invalid={data.phone && !handlePhone(data.phone)}
        message={formStatus.phone.message}
      />
      <Input
        name="plaque"
        type="text"
        placeholder="Placa"
        onChange={hangleChange}
        invalid={data.plaque && !handlePlaque(data.plaque)}
        message={formStatus.plaque.message}
      />
      <CheckBox
        onChange={(e) => setChecked(e.target.checked)}
        label="Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones."
      />
      <Button title="cotízalo" />
    </FormContainer>
  );
};
const FormContainer = styled.form``;
const Tilte = styled(BodyMain)``;
