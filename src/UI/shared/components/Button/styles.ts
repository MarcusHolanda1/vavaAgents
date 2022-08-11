import styled, { css } from "styled-components/native";
import { spacing } from "../../theme";
import { RFValue } from "react-native-responsive-fontsize";

export interface ButtonProps {
  width: number;
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  ${({ theme, disabled }) => css`
    background: ${disabled ? theme.colors.disabled : theme.colors.primary};
  `}
  opacity: 1;
  justify-content: center;
  width: ${({ width }) => RFValue(width)}px;
  height: 50px;
  border-radius: ${spacing.n8}px;
`;
