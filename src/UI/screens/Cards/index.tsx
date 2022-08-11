import React, { useEffect, useState } from "react";

import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";
import Request from "../../../services/request";
import { CardHeader, CardFooter, CardItem, ErrorBoundary } from "./components";
import { Page } from "../../shared/structures";
import { useTheme } from "../../../contexts/theme";
import theme from "../../shared/theme";

interface RouteProps {
  key: string;
  name: string;
  params: {
    name: string;
  };
  path: string;
}

interface CardProps {
  displayName: string;
  description: string;
  uuid: string;
  points: number;
  killfeedPortrait: string;
}

const MAX_CARDS = 8;

const Cards = () => {
  const [cardsList, setCardsList] = useState<CardProps[]>([]);
  const [quantityCards, setQuantityCards] = useState<number>(5);
  const [loading, setLoading] = useState<boolean>(false);
  const [shuffle, setShuffle] = useState<number>(Math.random());
  const [error, setError] = useState<boolean>(false);

  const route = useRoute<RouteProps>();
  const { currentTheme } = useTheme();
  const navigation = useNavigation();

  const loadCards = async () => {
    const request = new Request();

    try {
      setLoading(true);
      const response = await request.getAgents();

      for (const card of response.data.data) {
        card.points = Math.floor(Math.random() * 10);
      }

      setLoading(false);
      setCardsList(response.data.data);
    } catch (error) {
      setLoading(false);
      setError(true);
      return error;
    }
  };

  const shuffleCards = (cards: CardProps[]) =>
    cards.sort(() => shuffle - 0.5).slice(0, quantityCards);

  const cards = shuffleCards(cardsList);

  useEffect(() => {
    loadCards();
  }, []);

  return (
    <Page
      header={
        <S.ContentHeaderPage>
          <TouchableOpacity onPress={navigation.goBack}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={34}
              color={
                currentTheme === "dark"
                  ? theme.dark.colors.basicTextColor
                  : theme.light.colors.basicTextColor
              }
            />
          </TouchableOpacity>
        </S.ContentHeaderPage>
      }
    >
      {loading ? (
        <ActivityIndicator size="large" color={theme.dark.colors.primary} />
      ) : (
        <S.Container>
          <ErrorBoundary error={error}>
            <FlatList
              ListHeaderComponent={<CardHeader name={route.params.name} />}
              ListFooterComponent={
                <CardFooter
                  disabled={quantityCards < MAX_CARDS ? false : true}
                  onPressNewCard={() => setQuantityCards((cards) => cards + 1)}
                  onPressShuffle={() => setShuffle(Math.random())}
                  textButtonNewCard={`Novo cartão (${
                    MAX_CARDS - quantityCards
                  })`}
                  textShuffleButton={"Sortear"}
                />
              }
              contentContainerStyle={{ paddingBottom: 40 }}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.uuid}
              data={cards}
              numColumns={2}
              columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
              ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              renderItem={({ item }) => (
                <CardItem
                  description={item.description}
                  displayName={item.displayName}
                  points={item.points}
                  killfeedPortrait={item.killfeedPortrait}
                />
              )}
            />
          </ErrorBoundary>
        </S.Container>
      )}
    </Page>
  );
};

export default Cards;
