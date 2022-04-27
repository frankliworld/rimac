import styled from "styled-components";
import { MediumText, TextSmall } from "../styles/TextStyles";
import MyImageSvg from "../../assets/icons/profile.svg";
const Enrollment = () => {
  const user = window.localStorage.getItem("auth");
  const parse = JSON.parse(user);
  const { plaque } = parse;
  return (
    <Wrapper>
      <Plaque>Placa: {plaque || "C2U-114"}</Plaque>
      <Name>Wolkswagen 2019 Golf</Name>
      <Avatar src={MyImageSvg} />
    </Wrapper>
  );
};

export default Enrollment;

const Wrapper = styled.div`
  position: relative;
  background: white;
  border: 3px solid #f0f2fa;
  border-radius: 12px;
  padding: 40px 0 56px 32px;
  margin-bottom: 40px;
`;
const Plaque = styled(TextSmall)`
  color: var(--Text2);
  font-family: "Lato", sans-serif;
  margin-bottom: 10px;
`;
const Name = styled(MediumText)`
  font-family: "Lato", sans-serif;
  max-width: 50%;
  margin: 0;
`;
const Avatar = styled.img`
  position: absolute;
  bottom: -26px;
  right: 20px;
`;
