import React from "react";
import { ThemeProvider } from "styled-components";

import { useTheme } from "../contexts/theme";
import theme from "../UI/shared/theme";

type Props = {
  children: React.ReactNode;
};

export function Theme({ children }: Props) {
  const { currentTheme } = useTheme();

  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
}
