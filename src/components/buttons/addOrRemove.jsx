import { useState } from "react";
import styled from "styled-components";
import { IconAdd, IconRemove } from "../icons";
import { MediumText, TextSmall } from "../styles/TextStyles";

const AddOrRemove = (props) => {
  const { add } = props;
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    setIsAdded(!isAdded);
    add && add(isAdded);
  };

  return (
    <Wrapped onClick={handleClick}>
      {isAdded ? <IconRemove /> : <IconAdd />}
      <Text>{isAdded ? "Quitar" : "Agregar"}</Text>
    </Wrapped>
  );
};
export default AddOrRemove;

const Wrapped = styled.button`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 10px;
  align-items: center;
  border: none;
  background-color: transparent;
`;
const Text = styled(TextSmall)`
  color: var(--Secondary);
  font-weight: bold;
  font-family: "Lato", sans-serif;
  margin: 0;
`;
