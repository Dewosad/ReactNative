import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";

const HomeBody = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        gap: 10,
      }}
    >
      <Card
        title="News"
        contentTitle={"News and Podcast"}
        navigateTo="News"
        navigation={navigation}
      />
    </View>
  );
};

export default HomeBody;
