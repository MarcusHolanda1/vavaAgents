import React from "react";
import { Image } from "react-native";

import * as S from "./styles";
import { Text } from "../../../../shared/components";
import IMAGES from "../../../../../assets";
import { useTheme } from "../../../../../contexts/theme";
import theme from "../../../../shared/theme";

interface CardHeaderProps {
  name: string;
}

const CardHeader = ({ name }: CardHeaderProps) => {
  const { currentTheme } = useTheme();

  return (
    <>
      <S.ContentImageHeader>
        {currentTheme === "light" ? (
          <Image
            style={{ width: 70, height: 70 }}
            source={IMAGES.banners.logoLight}
          />
        ) : (
          <Image
            style={{ width: 70, height: 70 }}
            source={IMAGES.banners.logoDark}
          />
        )}
      </S.ContentImageHeader>
      <S.ContentUserName>
        <Text
          type="h1"
          color={
            currentTheme === "dark"
              ? theme.dark.colors.basicTextColor
              : theme.light.colors.basicTextColor
          }
        >
          {name}
        </Text>
      </S.ContentUserName>
    </>
  );
};
export default CardHeader;
