import styled from "styled-components/native";

import { spacing } from "../../theme";

interface Text {
  color: string;
  fontFamily: string;
}

export const H1 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${spacing.n18}px;
  font-family: ${(props) => props.fontFamily};
`;

export const H2 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${spacing.n16}px;
  font-family: ${(props) => props.fontFamily};
`;

export const H3 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${spacing.n12}px;
  font-family: ${(props) => props.fontFamily};
`;

export const P = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${spacing.n10}px;
  font-family: ${(props) => props.fontFamily};
`;
