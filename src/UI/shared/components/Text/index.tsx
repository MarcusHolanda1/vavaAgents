import React from "react";

import { StyleProp, TextStyle } from "react-native";

import * as S from "./styles";

interface Props {
  children: any;
  type?: "h1" | "p" | "h2" | "h3";
  color?: string;
  fontFamily?: string;
  style?: StyleProp<TextStyle>;
}

const Text = ({
  children,
  type = "h1",
  color = "red",
  fontFamily = "Roboto_400Regular",
  style,
}: Props) => {
  const TextComponent = {
    h1: S.H1,
    h2: S.H2,
    h3: S.H3,
    p: S.P,
  }[type];
  return (
    <TextComponent color={color} fontFamily={fontFamily} style={style}>
      {children}
    </TextComponent>
  );
};
export default Text;
