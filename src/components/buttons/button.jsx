import styled from "styled-components";
import { MediumText } from "../styles/TextStyles";

const Button = ({ title, name, style }) => {
  return (
    <Wrapped style={style}>
      <Text>{title || name}</Text>
    </Wrapped>
  );
};
export default Button;

const Wrapped = styled.button`
  cursor: pointer;
  height: 56px;
  background: var(--Primary);
  border: none;
  color: white;
  border-radius: 8px;
  padding: 0 32px;
  margin-bottom: 20px;
  animation-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`;
const Text = styled(MediumText)`
  margin: 0;
  color: currentColor;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`;
