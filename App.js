import React, { useState } from "react";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import AppLoading from "expo-app-loading";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import Header from "./shared/header";
import { Image } from "react-native";

const HomeStack = createStackNavigator();
const AboutStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#eee" },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <Header navigation={navigation} title="GameZone" />,
        headerBackground: () => (
          <Image
            source={require("./assets/game_bg.png")}
            style={{ height: 90 }}
          />
        ),
      }}
    />
    <HomeStack.Screen name="Review" component={ReviewDetails} />
  </HomeStack.Navigator>
);
const AboutStackScreen = ({ navigation }) => (
  <AboutStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
      },
    }}
  >
    <AboutStack.Screen
      name="About"
      component={About}
      options={{
        // title: "About GameZone",
        // headerLeft: () => (
        //   <Icon.Button
        //     name="menu-outline"
        //     size={25}
        //     color="#000"
        //     backgroundColor="#eee"
        //     onPress={() => navigation.openDrawer()}
        //   ></Icon.Button>
        // ),
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
        headerBackground: () => (
          <Image
            source={require("./assets/game_bg.png")}
            style={{ height: 90 }}
          />
        ),
      }}
    />
  </AboutStack.Navigator>
);

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
export default function App(props) {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#eee" },
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "GameZone",
            }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{
              title: "GameZone",
            }}
          />
          <Stack.Screen
            name="Review"
            component={ReviewDetails}
            options={{
              title: "GameZone",
            }}
          />
        </Stack.Navigator> */}
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeStackScreen} />
          <Drawer.Screen name="About" component={AboutStackScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded("true")}
        onError={console.warn}
      />
    );
  }
}
