import styled, { css } from "styled-components/native";
import { spacing } from "../../../../shared/theme";

export const Container = styled.View`
  ${({ theme }) => css`
    background: ${theme.colors.secondary};
  `}
  border-radius: ${spacing.n8}px;
  padding: ${spacing.n8}px;
  flex: 1;
  justify-content: space-between;
`;
