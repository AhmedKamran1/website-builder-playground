import styled from "styled-components";

export const Div = styled.div`
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};

  &:hover {
    background-color: gray;
  }
`;

export const Button = styled.button`
  color: ${(props) => props.color};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  font-size: ${(props) => props.fontSize};

  &:hover {
    background-color: gray;
  }
`;
