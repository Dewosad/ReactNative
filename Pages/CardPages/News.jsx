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

  const content = [
    {
      id: 1,
      title: "FRI, 03 MAR 2023",
      heading: "Tata Steel Mining Signs MoU With GAIL For Clean Fuel",
      desc: "GAIL will supply the agreed quantity of natural gas through its pipeline from Gujarat to Athgarh.",
    },
    {
      id: 2,
      title: "FRI, 03 MAR 2023",
      heading:
        "IHCL Joins Forces With Tata Steel Long Products Ltd (TSLPL) to Establish a Skill Centre at Jamshedpur, Jharkhand.",
      desc: "MUMBAI - Indian Hotels Company (IHCL), India’s largest hospitality company, announced its partnership for a specialised skill centre in Jamshedpur, Jharkhand in partnership with Tata Steel Long Products Ltd (TSLPL). Speaking on the occasion, Mr. Gau...",
    },
    {
      id: 3,
      title: "FRI, 03 MAR 2023",
      heading: "Tata Steel Mining Signs MoU With GAIL For Clean Fuel",
      desc: "GAIL will supply the agreed quantity of natural gas through its pipeline from Gujarat to",
    },
    {
      id: 4,
      title: "FRI, 03 MAR 2023",
      heading: "IHCL Joins Forces With Tata Steel Long Products Ltd (TSLPL)",
      desc: "MUMBAI - Indian Hotels Company (IHCL), India’s largest hospitality",
    },
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
        {content.map((c) => (
          <View key={c.id} className="px-5">
            <View style={styles.rowContainer}>
              <Text className="text-[12px] font-bold leading-[16px] text-[white]">
                {c.title}
              </Text>
              <View style={styles.lineContainer}>
                <View style={styles.horizontalLine} />
              </View>
            </View>
            <View className="gap-[7px]">
              <Text className="text-[#DFD09C] text-[16px] leading-[20px] font-bold">
                {c.heading}
              </Text>
              <Text className="text-[#C4C4C4] text-[12px] leading-4 font-normal">
                {c.desc}
              </Text>
            </View>
          </View>
        ))}
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
    // Adds vertical spacing
    paddingVertical: 10,
    // Adds vertical padding
  },
  lineContainer: {
    flex: 1, // Ensures line fills remaining space
    marginLeft: 10, // Space between text and line
  },
});
