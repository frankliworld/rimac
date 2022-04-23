import styled from "styled-components";
import { Header } from "../components/layout/header";
import { Container, Grid } from "../components/styles/WrapStyles";

const Login = () => {
  return (
    <LoginContainer>
      <Header/>
      <Container>
        <Grid columns="37">
         GR
        </Grid>
        
       <Grid columns="2">
         <Section>asd</Section>
         <Section>form</Section>
       </Grid>
      </Container>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  /* display: flex; */
`;
const Section = styled.section``