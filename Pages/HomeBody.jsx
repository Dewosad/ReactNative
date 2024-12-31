import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";

const HomeBody = ({ navigation }) => {
  return (
    <View className="gap-[20px]">
      <Text className="text-white text-[16px] leading-[16px] pl-5">
        Daily Business
      </Text>
      <Card
        title="News"
        contentTitle={"NEWS & INSIGHTS"}
        navigateTo="News"
        navigation={navigation}
      />
      <Card
        title="Podcasts"
        contentTitle={"PODCASTS"}
        navigateTo="Podcasts"
        navigation={navigation}
      />
      <Card
        title="Service"
        contentTitle={"SERVICES"}
        navigateTo="Service"
        navigation={navigation}
      />
    </View>
  );
};

export default HomeBody;
