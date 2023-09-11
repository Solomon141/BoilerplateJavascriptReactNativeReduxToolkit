import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

// styles
import { ddTextColor, ddThemeColor } from "../Reusables/Styles";

// Import All Components
import Login from "../Login";

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTintColor: ddTextColor,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
