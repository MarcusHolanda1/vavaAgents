import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

import Home from "../UI/screens/Home";
import Cards from "../UI/screens/Cards";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  Cards: {
    name: string;
  };
};

function MainApp() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainApp;
