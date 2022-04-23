import styled from "styled-components";
import { Breakpoints, Media } from "../../utils/io";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.align === "center" &&
    `
    margin: 0 auto;
  `}
  ${(props) =>
    props.align === "left" &&
    `
    margin-right: auto;
  `}
  ${(props) =>
    props.align === "right" &&
    `
    margin-left: auto; ;
  `}
  @media ${Media.mobile} {
    max-width: ${Breakpoints.mobile};
    /* background: #d4b170; */
  }
  @media ${Media.tablet} {
    max-width: ${Breakpoints.tablet};
    /* background: #77bc77; */
  }
  @media ${Media.desktop} {
    max-width: ${Breakpoints.desktop};
    /* background: #7474de; */
  }
`;

export const Grid = styled.div`
  display: grid;
  background: #f3c4cc;
  ${(props) =>
    props.columns && `grid-template-columns: repeat(${props.columns}, 1fr);`};
  ${(props) => props.rows && `grid-template-rows: ${props.rows}`};
  ${(props) => props.gap && `grid-gap: ${props.gap}`};
`;
