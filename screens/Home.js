import React, { useState } from "react";
import Card from "../shared/Card";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  FlatList,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { globalStyles } from "../styles/globalStyle";
import ReviewForm from "./ReviewForm";
export default function Home({ navigation }) {
  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  const addReview = (review) => {
    review.key = JSON.stringify(reviews.length + 1);
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setOpenModal(false);
  };
  const deleteReview = (id) => {
    setReviews((prevReviews) => {
      return prevReviews.filter((review) => review.key != id);
    });
  };
  return (
    <View style={globalStyles.container}>
      <Modal visible={openModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setOpenModal(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setOpenModal(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Review", {
                title: item.title,
                body: item.body,
                rating: item.rating,
              })
            }
          >
            <Card>
              <View style={styles.item}>
                <MaterialIcons
                  name="delete"
                  size={24}
                  color="#333"
                  onPress={() => deleteReview(item.key)}
                />
                <Text style={globalStyles.titleText}>{item.title}</Text>
              </View>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  item: {
    padding: 5,
    margin: 5,
    flexDirection: "row",
  },
});
