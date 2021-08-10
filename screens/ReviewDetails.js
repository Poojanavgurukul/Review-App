import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Card from "../shared/Card";
import { globalStyles, images } from "../styles/globalStyle";
export default function ReviewDetail({ route, navigation }) {
  const rating = route.params.rating;
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>Review Detail</Text>
        <Text style={globalStyles.titleText}>{route.params.title}</Text>
        <Text style={globalStyles.paragraph}>{route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating:</Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
