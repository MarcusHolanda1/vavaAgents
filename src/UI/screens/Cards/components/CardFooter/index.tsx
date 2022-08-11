import React from "react";

import * as S from "./styles";
import { Text, Button } from "../../../../shared/components";
import theme from "../../../../shared/theme";

interface CardFooterProps {
  disabled: boolean;
  onPressNewCard: () => void;
  textButtonNewCard: string;
  textShuffleButton: string;
  onPressShuffle: () => void;
}

const CardFooter = ({
  disabled,
  onPressNewCard,
  textButtonNewCard,
  textShuffleButton,
  onPressShuffle,
}: CardFooterProps) => {
  return (
    <S.ContentButtons>
      <Button disabled={disabled} onPress={onPressNewCard} width={120}>
        <Text
          style={{ textAlign: "center" }}
          color={theme.dark.colors.basicTextColor}
          type="h2"
        >
          {textButtonNewCard}
        </Text>
      </Button>
      <Button onPress={onPressShuffle} width={120}>
        <Text
          style={{ textAlign: "center" }}
          color={theme.dark.colors.basicTextColor}
          type="h2"
        >
          {textShuffleButton}
        </Text>
      </Button>
    </S.ContentButtons>
  );
};
export default CardFooter;
