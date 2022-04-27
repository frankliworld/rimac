import styled from "styled-components";
import { TextSmall } from "../styles/TextStyles";

const CheckBox = (props) => {
  const { label, name, value, onChange, checked } = props;
  return <Wrapper>
    <Text>{label}</Text>
  </Wrapper>;
};
export default CheckBox;
const Wrapper = styled.div``;
const Text = styled(TextSmall)``;
