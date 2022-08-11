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
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import Home from "../UI/screens/Home";
import Cards from "../UI/screens/Cards";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Cards: {
    name: string;
  };
};

SplashScreen.preventAutoHideAsync();

function MainApp() {
  const [appIsReady, setAppIsReady] = React.useState<boolean>(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto_300Light,
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
        });

        await new Promise((resolve) => setTimeout(resolve, 1500));
      } catch (error) {
        return error;
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainApp;
