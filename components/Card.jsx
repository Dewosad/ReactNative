import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, TouchableOpacity } from "react-native";

const Card = ({ style, contentTitle, styleView, navigation, navigateTo }) => {
  return (
    <View
      style={[
        style ?? {
          display: "flex",
          gap: 10,
        },
      ]}
    >
      <Text
        style={{
          fontSize: 20,
          color: "white",
        }}
      >
        Daily Business
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
        <View
          style={[
            styleView ?? {
              padding: 17,
              backgroundColor: "#242C37",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 10,
              paddingRight: 20,
            },
          ]}
        >
          <Text style={{ fontSize: 18, color: "white" }}>{contentTitle}</Text>
          <AntDesign name="right" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
