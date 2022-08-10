import React from "react";

import { StyleProp, TextStyle } from "react-native";

import * as S from "./styles";

interface Props {
  children: any;
  type?: "h1";
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
  }[type];
  return (
    <TextComponent color={color} fontFamily={fontFamily} style={style}>
      {children}
    </TextComponent>
  );
};
export default Text;
