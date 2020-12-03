import * as React from "react";
import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import Blog from "../components/Blog";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: "100%", height: 80 }}
        source={require("../assets/images/banner.png")}
      />
      <View
        style={styles.separator}
        lightColor="#fff"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Blog />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: "80%"
  }
});
