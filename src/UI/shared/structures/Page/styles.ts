import styled, { css } from "styled-components/native";
import { StatusBar, Platform } from "react-native";

import { spacing } from "../../theme/spacing";

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  padding-bottom: 0;
  ${({ theme }) => css`
    background: ${theme.colors.backgroundShape};
  `}
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: ${spacing.n8}px ${spacing.n8}px ${spacing.n8}px ${spacing.n8}px;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;
