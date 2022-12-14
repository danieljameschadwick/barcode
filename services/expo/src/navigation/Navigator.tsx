import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  getPrimaryContainer,
  getPrimaryText,
} from "@barcode/theme/utils/variables";
import IonIcon from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "@src/screens/HomeScreen";
import { CameraScreen } from "@src/screens/CameraScreen";
import { SettingsScreen } from "@src/screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  const screenOptions = {
    headerStyle: {
      backgroundColor: getPrimaryContainer(),
    },
    headerTitleStyle: {
      color: getPrimaryText(),
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index" screenOptions={screenOptions}>
        <Stack.Screen
          name="Index"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Home",
            headerRight: () => (
              <>
                <IonIcon
                  onPress={() => navigation.navigate("Camera")}
                  name={"camera"}
                  size={24}
                  color={getPrimaryText()}
                />
                <IonIcon
                  onPress={() => navigation.navigate("Settings")}
                  name={"cog"}
                  size={24}
                  color={getPrimaryText()}
                />
              </>
            ),
          })}
        />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        {/* // @TODO: implement login in app */}
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* // @TODO: implement registration in app */}
        {/*<Stack.Screen name="Register" component={RegisterScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
