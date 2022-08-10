import styled from "styled-components/native";

import { spacing } from "../../theme";

interface Text {
  color: string;
  fontFamily: string;
}

export const H1 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${spacing.n16}px;
  font-family: ${(props) => props.fontFamily};
`;
