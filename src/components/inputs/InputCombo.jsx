import styled from "styled-components";

const Input = (props) => {
  const { type, name, placeholder, onChange } = props;
  return (
    <InputContainer>
      <InputElement
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
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
  border: 2px solid #c5cbe0;
  height: 56px;
  padding: 0 16px;
  border-radius: 4px;
`;
