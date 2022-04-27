import styled from "styled-components";
import { TextSmall } from "../styles/TextStyles";

const CheckBox = (props) => {
  const { label, name, value, onChange, checked } = props;
  return (
    <Wrapper>
      <Input type="checkbox" onChange={onChange} />
      <Text>{label}</Text>
    </Wrapper>
  );
};
export default CheckBox;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 10px;
`;
const Text = styled(TextSmall)``;
const Input = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  background: #43b748;
`;
