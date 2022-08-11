import { TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";
import theme, { spacing } from "../../shared/theme";

interface InputTextProps {
  currenTheme: "light" | "dark";
  theme: typeof theme.dark;
}

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.backgroundShape};
  `}
`;

export const InputText = styled(TextInput)`
  ${({ theme, currenTheme }: InputTextProps) => css`
    background-color: ${currenTheme === "light"
      ? theme.colors.secondary
      : theme.colors.basicTextColor};
    height: 50px;
    padding: ${spacing.n8}px;
    width: 50%;
    border-radius: ${spacing.n8}px;
  `}
`;

export const ContentPlay = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const ContentButton = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: ${spacing.n8}px;
`;

export const ContainerSwitch = styled.View`
  padding-bottom: ${spacing.n12}px;
`;

export const ContentSwitch = styled.View`
  justify-content: flex-start;
  flex-direction: row;
`;
