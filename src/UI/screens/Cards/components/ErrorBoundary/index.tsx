import React, { ReactChildren } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { Text } from "../../../../shared/components";
import * as S from "./styles";
import theme from "../../../../shared/theme";

interface ErrorBoundaryProps {
  children: JSX.Element;
  error: boolean;
}

const ErrorBoundary = ({ children, error }: ErrorBoundaryProps) => {
  if (error) {
    return (
      <S.ContainerError>
        <MaterialIcons
          name="error-outline"
          size={46}
          color={theme.dark.colors.primary}
          style={{ marginBottom: 10 }}
        />
        <Text color={theme.dark.colors.primary} type="h1">
          Ocorreu um erro ao tentar renderizar suas cartas :(
        </Text>
      </S.ContainerError>
    );
  }

  return children;
};
export default ErrorBoundary;
