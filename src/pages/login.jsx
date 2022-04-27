import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/buttons/button";
import { GraphMain } from "../components/icons";
import CheckBox from "../components/inputs/CheckBox";
import Input from "../components/inputs/input";
import { Header } from "../components/layout/header";
import { BodyIntro, BodyMain } from "../components/styles/TextStyles";
import { Container, Grid } from "../components/styles/WrapStyles";

const Login = () => {
  return (
    <LoginContainer>
      <Header />
      <Container align="center">
        <Grid columns="37">GR</Grid>

        <Grid columns="2">
          <Section>
            <Graphic />
          </Section>
          <Section>
            <Form />
          </Section>
        </Grid>
      </Container>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100%;
`;
const Section = styled.section`
  display: grid;
  place-content: center;
`;
const Graphic = () => (
  <GraphicContainer>
    <GraphMain />
  </GraphicContainer>
);
const GraphicContainer = styled.div``;
const Intro = styled(BodyIntro)``;
const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  const [data, setData] = useState({});
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
      message: "Ingrese una placa válida de 6 a 8 dígitos, en mayúsculas ejemplo: ABC-123",
    },
  });

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
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Datos guardados");
      window.localStorage.setItem("auth", JSON.stringify(data));
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
      <CheckBox label="Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones." />
      <Button title="cotízalo" />
    </FormContainer>
  );
};
const FormContainer = styled.form``;
const Tilte = styled(BodyMain)``;
