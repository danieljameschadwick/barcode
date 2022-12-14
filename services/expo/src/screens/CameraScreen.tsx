import React from "react";
import { StyleSheet, View } from "react-native";
import { getTheme } from "@barcode/theme/utils/theme";
import { Camera } from "@barcode/ui/components/camera/Camera";

export const CameraScreen: React.FC = () => {
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
      <Camera />
    </View>
  );
};
