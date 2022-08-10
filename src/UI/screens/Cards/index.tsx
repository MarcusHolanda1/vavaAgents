import React from "react";
import { Text } from "../../components";
import { useRoute } from "@react-navigation/native";
import { Page } from "../../structures";

interface RouteProps {
  key: string;
  name: string;
  params: {
    name: string;
  };
  path: string;
}

const Cards = () => {
  const route = useRoute<RouteProps>();

  return (
    <Page>
      <Text>{route.params.name}</Text>
    </Page>
  );
};
export default Cards;
