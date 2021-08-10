import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
export default function Header({ navigation, title }) {
  const open = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={25}
        color="#000"
        backgroundColor="#eee"
        style={styles.icon}
        onPress={open}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: "row",
  },
  icon: {
    position: "absolute",
    left: 16,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
