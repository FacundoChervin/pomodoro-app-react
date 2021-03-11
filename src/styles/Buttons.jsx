import styled from "styled-components";
const Span = styled.span`
  color: ${(props) => (props.mainColor ? props.mainColor : "#1D70A2")};
  margin: 5px auto;
  padding: ${(props) => (props.mainButton ? "0" : "4%")};
  &:hover {
    color: ${(props) => (props.hoverColor ? props.hoverColor : "#173753")};
    cursor: pointer;
  }
`;

export { Span };
