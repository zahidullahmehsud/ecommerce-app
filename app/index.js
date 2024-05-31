import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Link } from "expo-router";
import { View, Text } from "react-native";
import Home from "./screens/Home";
import About from "./screens/About";
import ProductDetails from "./screens/ProductDetails";
import HomeNavigation from "./(tabNavigation)/HomeNavigation";

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    // <View>
    //   <Text>New App</Text>
    //   <Link href={{ pathname: "/screens/Home", params: { name: "zahid" } }}>
    //     Home
    //   </Link>

    // </View>

    <Stack.Navigator>
      {/* <Stack.Screen
        name="homeNavigation"
        component={HomeNavigation}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="about"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="productDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default index;
