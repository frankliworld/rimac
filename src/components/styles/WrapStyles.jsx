import { useEffect, useState, startTransition } from "react";
import styled from "styled-components";
import { Breakpoints, Media } from "../../utils/io";

export const Container = ({ children, align, ...props }) => {
  const [padding, setPadding] = useState(0);
  const [customPadding, setCustomPadding] = useState(0);
  useEffect(() => {
    startTransition(() => {
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
  }, []);
  const handleResize = () => {
    const container = document.querySelector(".container");
    const ww = window.innerWidth > 2000 ? 2000 : window.innerWidth;
    const cw = container.getBoundingClientRect().width;
    const _customPadding = ww < 2000 ? 32 : 0;
    const _padding = (ww - cw) / 2;
    setPadding(_padding);
    setCustomPadding(_customPadding);
  };
  return (
    <WrappedContainer
      {...props}
      md={align}
      pd={padding}
      cpd={customPadding}
      layout
    >
      {children}
    </WrappedContainer>
  );
};

export const WrappedContainer = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.md === "center" &&
    `
    margin: 0 auto;
    padding: 0 ${props.cpd}px;
  `}
  ${(props) =>
    props.md === "left" &&
    `
    padding-left: ${props.pd + props.cpd || 0}px;
  `}
  ${(props) =>
    props.md === "right" &&
    `
    padding-right: ${props.pd + props.cpd || 0}px;
  `}
  @media ${Media.mobile} {
    max-width: ${Breakpoints.mobile};
  }
  @media ${Media.tablet} {
    max-width: ${Breakpoints.tablet};
  }
  @media ${Media.desktop} {
    max-width: ${Breakpoints.desktop};
  }
  @media ${Media.desktopL} {
    max-width: ${Breakpoints.desktopL};
  }
  @media ${Media.desktopXL} {
    max-width: ${Breakpoints.desktopXL};
  }
`;

export const Grid = styled.div`
  display: grid;
  ${(props) =>
    props.columns && `grid-template-columns: repeat(${props.columns}, 1fr);`};
  ${(props) => props.rows && `grid-template-rows: ${props.rows}`};
  ${(props) => props.gap && `grid-gap: ${props.gap}`};
`;
