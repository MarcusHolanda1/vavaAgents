import React from "react";
import { Image } from "react-native";

import { useTheme } from "../../../../../contexts/theme";

import { Text } from "../../../../shared/components";
import theme from "../../../../shared/theme";
import Card from "../Card";
import * as S from "./styles";

interface CardItemProps {
  points: number;
  displayName: string;
  description: string;
  killfeedPortrait: string;
}

const CardItem = ({
  points,
  displayName,
  description,
  killfeedPortrait,
}: CardItemProps) => {
  const { currentTheme } = useTheme();

  return (
    <S.ContainerCards>
      <Card>
        <S.HeaderCard>
          <Text
            color={
              currentTheme === "dark"
                ? theme.dark.colors.basicTextColor
                : theme.light.colors.basicTextColor
            }
            type="h1"
          >
            {points}
          </Text>
          <Text
            color={
              currentTheme === "dark"
                ? theme.dark.colors.basicTextColor
                : theme.light.colors.basicTextColor
            }
          >
            {displayName}
          </Text>
        </S.HeaderCard>
        <S.ContentDescription>
          <Text
            color={
              currentTheme === "dark"
                ? theme.dark.colors.basicTextColor
                : theme.light.colors.basicTextColor
            }
            type="p"
          >
            {description}
          </Text>
        </S.ContentDescription>
        <S.ContentImage>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: killfeedPortrait,
            }}
          />
        </S.ContentImage>
      </Card>
    </S.ContainerCards>
  );
};
export default CardItem;
