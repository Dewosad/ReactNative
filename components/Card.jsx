import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, TouchableOpacity } from "react-native";

const Card = ({ style, contentTitle, styleView, navigation, navigateTo }) => {
  return (
    <View className={`${style} flex gap-5`}>
      <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
        <View className="p-4 bg-gray-800 flex flex-row justify-between items-center rounded-lg pr-5">
          <Text className="text-white text-lg">{contentTitle}</Text>
          <AntDesign name="right" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
