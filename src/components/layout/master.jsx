import styled from "styled-components";

export const Master = (props) => {
  const { children } = props;
  return (
    <Content>
      <Wrapped>{children}</Wrapped>
    </Content>
  );
};
const Content = styled.div`
  display: grid;
  grid-template-columns: 260px 1fr;
  height: 100%;
`;
const Wrapped = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;
