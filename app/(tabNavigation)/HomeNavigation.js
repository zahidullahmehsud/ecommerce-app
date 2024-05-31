import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Import this from wherever your pages are located
import Home from "../screens/Home";

const HomeNavigation = () => {
  // Attention, this is a BottomTab
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="home" component={Home} />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
