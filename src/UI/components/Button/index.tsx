import React from "react";
import * as S from "./styles";
import { ButtonProps } from "./styles";

const Button = ({ children, width, onPress, disabled }: ButtonProps) => {
  return (
    <S.Container disabled={disabled} onPress={onPress} width={width}>
      {children}
    </S.Container>
  );
};
export default Button;
