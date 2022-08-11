import styled from "styled-components/native";
import { spacing } from "../../../../shared/theme";

export const ContentImageHeader = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContentUserName = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  margin: 0 ${spacing.n12}px ${spacing.n12}px 0;
`;
