import theme from "../UI/shared/theme";

type Theme = typeof theme.dark;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
