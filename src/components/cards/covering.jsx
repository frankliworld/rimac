import { useState } from "react";
import styled from "styled-components";
import AddOrRemove from "../buttons/addOrRemove";
import { MediumText, TextSmall } from "../styles/TextStyles";

const Covering = (props) => {
  const { name, image, description, add } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <WrappedCovering>
      <Top>
        <Image src={image} alt={name} />
        <Group>
          <Name>{name}</Name>
          <AddOrRemove add={add} />
        </Group>
        <Touchable onClick={handleClick}>
          <svg
            style={{
              transform: !isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="#EF3340"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.05837 14.4507C4.65929 14.0405 4.65739 13.3808 5.0541 12.9683L10.2469 7.5687C10.6538 7.14556 11.324 7.14363 11.7334 7.56441L16.9572 12.934C17.3563 13.3442 17.3582 14.0039 16.9615 14.4164C16.5545 14.8396 15.8844 14.8415 15.475 14.4207L10.9966 9.81739L6.54486 14.4464C6.13792 14.8696 5.46774 14.8715 5.05837 14.4507Z"
            />
          </svg>
        </Touchable>
      </Top>
      <Bottom isOpen={isOpen}>
        <Description>{description}</Description>
      </Bottom>
    </WrappedCovering>
  );
};
export default Covering;
const WrappedCovering = styled.div`
  border-bottom: 1px solid #E4E8F7;
`;
const Top = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 20px;
  gap: 20px;
  padding: 20px;
`;
const Bottom = styled.div`
  height: ${(props) => (props.isOpen ? "auto" : "0px")};
  overflow: hidden;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
`;
const Image = styled.img``;
const Name = styled(MediumText)``;
const Group = styled.div``;
const Touchable = styled.div`
  cursor: pointer;
`;
const Description = styled(TextSmall)`
  color: var(--Text2);
`;
