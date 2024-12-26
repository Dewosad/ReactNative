import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import mainStyle from "../../styles/mainStyle";
import { Dropdown } from "react-native-element-dropdown";

const News = () => {
  const data = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View style={mainStyle.mainNewsContainer}>
      <View style={mainStyle.mainScreenNews}>
        <Text style={mainStyle.textStyle}>NEWS & INSIGHTS</Text>
        <Dropdown
          placeholder="ALL"
          data={data}
          onChange={(value) => value}
          style={mainStyle.dropdown}
          labelField={"label"}
          valueField={"value"}
          containerStyle={{
            backgroundColor: "#0a2232",
            borderRadius: 15,
            width: "30%",
            borderColor: "red",
          }}
          itemTextStyle={{ color: "white" }}
          selectedTextStyle={{ color: "white" }}
          activeColor="#101822"
          placeholderStyle={{ color: "white" }}
          itemContainerStyle={{ borderRadius: 15 }}
          iconColor="white"
        />
      </View>

      <ScrollView>
        <View style={styles.rowContainer}>
          <Text style={{ color: "white", fontSize: 20 }}>News</Text>
          <View style={styles.lineContainer}>
            <View style={styles.horizontalLine} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  horizontalLine: {
    height: 1, // Line thickness
    backgroundColor: "#cccccc", // Line color
    marginVertical: 10, // Space around the line
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center", // Ensures alignment of line and text
    marginVertical: 10, // Adds vertical spacing
    paddingHorizontal: 20, // Adds horizontal spacing
    paddingVertical: 10, // Adds vertical padding
  },
  lineContainer: {
    flex: 1, // Ensures line fills remaining space
    marginLeft: 10, // Space between text and line
  },
});
