import styled from "styled-components";
import { Media } from "../../utils/io";
import { IconPhone, Logo } from "../icons";
import { MediumText, TextSmall } from "../styles/TextStyles";
import { Container } from "../styles/WrapStyles";

export const Header = (props) => {
  const {sticky} = props;
  return (
    <HeaderContainer sticky={sticky} >
      <CustomContainer align="center" className="container">
        <Logo />
        <Contact />
      </CustomContainer>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
  grid-area: head;
  height: 64px;
  width: 100%;
  background: white;
  border-bottom: 1px solid #d7dbf5;
  @media ${Media.mobile} {
    height: 56px;
  }

  ${props => props.sticky && `
    position: fixed;
    top: 0;
    z-index: 1;
    background: transparent;
    border-color: transparent;
  `}
`;

const CustomContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Contact = () => (
  <WrappedContact>
    <Text>¿Tienes alguna duda?</Text>
    <Link href="tel:014116001">
      <IconPhone />
      <TextPhone>(01) 411 6001</TextPhone>
    </Link>
  </WrappedContact>
);

const WrappedContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  @media ${Media.mobile} {
    grid-template-columns: 1fr;
  }
`;
const Text = styled(TextSmall)`
  margin: 0;
  font-size: 12px;
  color: var(--Text2);
  @media ${Media.mobile} {
    display: none;
  }
`;
const TextPhone = styled(MediumText)`
  margin: 0;
`;
const Link = styled.a`
  color: var(--Secondary);
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 8px;
  text-decoration: none;
`;
