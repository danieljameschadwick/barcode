import React from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "@barcode/theme/utils/theme";

export const HomeScreen: React.FC = () => {
  const themeStyles = getTheme();
  const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
    },
    heading: {
      textAlign: "center",
      fontSize: 18,
      marginBottom: 15,
      fontWeight: "bold",
    },
  });

  return (
    <View style={[styles.container, themeStyles.container]}>
    </View>
  );
};
