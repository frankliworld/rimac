import styled from "styled-components";
import { TextSmall } from "../styles/TextStyles";

const Input = (props) => {
  const { type, name, placeholder, onChange, invalid, message } = props;
  return (
    <InputContainer>
      <InputElement
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        invalid={invalid}
      />
      {invalid && <Message>{message}</Message>}
    </InputContainer>
  );
};
export default Input;

const InputContainer = styled.div`
  margin-bottom: 20px;
  animation-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`;
const InputElement = styled.input`
  background: white;
  border-width: 2px;
  border-color: ${(props) => (props.invalid ? "var(--Primary)" : "#c5cbe0")};
  border-style: solid;
  height: 56px;
  padding: 0 16px;
  border-radius: 4px;
`;
const Message = styled(TextSmall)`
  color: var(--Primary);
`;
