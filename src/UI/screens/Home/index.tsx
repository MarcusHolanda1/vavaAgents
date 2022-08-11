import React, { useEffect, useState } from "react";
import { Switch, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

import { useTheme } from "../../../contexts/theme";
import IMAGES from "../../../assets";
import * as S from "./styles";
import theme from "../../shared/theme";
import { Page } from "../../shared/structures";
import { Button, Text } from "../../shared/components";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type HomeScreenProps = NativeStackNavigationProp<RootStackParamList, "Cards">;

const Home = () => {
  const [switchIsEnabled, setSwitchIsEnabled] = useState<boolean>(false);
  const [inputText, onChangeInputText] = useState<string>("Digite seu nome");

  const { handleChangeTheme } = useTheme();
  const { currentTheme } = useTheme();
  const navigation = useNavigation<HomeScreenProps>();
  const isFocused = useIsFocused();

  const toggleSwitch = () => {
    setSwitchIsEnabled((previousState) => !previousState);
  };

  const handleGoToCards = () => {
    navigation.navigate("Cards", { name: inputText });
  };

  useEffect(() => {
    if (isFocused) {
      onChangeInputText("Digite seu nome");
    }
  }, [isFocused]);

  return (
    <Page
      header={
        <>
          {currentTheme === "light" ? (
            <Image source={IMAGES.banners.logoLight} />
          ) : (
            <Image source={IMAGES.banners.logoDark} />
          )}
        </>
      }
    >
      <>
        <S.ContainerSwitch>
          <Text
            type="h1"
            color={
              currentTheme === "light"
                ? theme.light.colors.basicTextColor
                : theme.dark.colors.basicTextColor
            }
            style={{ paddingBottom: 6 }}
          >
            Dark Mode
          </Text>
          <S.ContentSwitch>
            <Switch
              trackColor={{
                false: theme.light.colors.secondary,
                true: theme.dark.colors.primary,
              }}
              thumbColor={
                switchIsEnabled
                  ? theme.dark.colors.backgroundShape
                  : theme.light.colors.backgroundShape
              }
              ios_backgroundColor={
                currentTheme === "light"
                  ? theme.light.colors.secondary
                  : theme.dark.colors.secondary
              }
              onValueChange={toggleSwitch}
              onChange={handleChangeTheme}
              value={switchIsEnabled}
            />
          </S.ContentSwitch>
        </S.ContainerSwitch>

        <S.ContentPlay>
          <S.InputText
            currenTheme={currentTheme}
            onChangeText={(text: string) => onChangeInputText(text)}
            value={inputText}
            clearTextOnFocus
            maxLength={40}
          />
          <Button
            width={120}
            onPress={handleGoToCards}
            disabled={
              inputText === "Digite seu nome" || inputText.length < 3
                ? true
                : false
            }
          >
            <S.ContentButton>
              <Text type="h2" color={theme.light.colors.backgroundShape}>
                Ver Cartas
              </Text>
              <Ionicons
                name="play"
                size={24}
                color={theme.dark.colors.basicTextColor}
              />
            </S.ContentButton>
          </Button>
        </S.ContentPlay>
      </>
    </Page>
  );
};
export default Home;
