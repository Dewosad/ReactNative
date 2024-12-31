import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import mainStyle from "../../styles/mainStyle";
import { Dropdown } from "react-native-element-dropdown";
import podcast1 from "../../assets/podcast1.png";
import podcast2 from "../../assets/podcast2.png";
import podcast3 from "../../assets/podcast3.png";
import podcast4 from "../../assets/podcast4.png";
import podcast5 from "../../assets/podcast5.png";

const Podcast = () => {
  const data = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const content = [
    {
      id: 1,
      heading: "Ep. 169 – Influence Starts Here – Part 2",
      desc: "GAIL will supply the agreed quantity of natural gas through its pipeline from Gujarat to Athgarh.",
      image: podcast1,
    },
    {
      id: 2,
      heading: "Ep. 169 – Influence Starts Here – Part 2",
      desc: "GAIL will supply the agreed quantity of natural gas through its pipeline from Gujarat",
      image: podcast2,
    },
    {
      id: 3,
      heading: "Ep. 169 – Influence Starts Here – Part 2",
      desc: "GAIL will supply the agreed quantity of natural gas through its pipeline from Gujarat to",
      image: podcast3,
    },
    {
      id: 4,
      heading: "Ep. 169 – Influence Starts Here – Part 2",
      desc: "GAIL will supply the agreed quantity of natural gas through its pipeline from Gujarat to",
      image: podcast4,
    },
    {
      id: 5,
      heading: "Ep. 169 – Influence Starts Here – Part 2",
      desc: "GAIL will supply the agreed quantity of natural gas through its pipeline from Gujarat to",
      image: podcast5,
    },
  ];

  return (
    <View className="bg-[#0a2232] h-[100%] flex-col justify-between">
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

      <ScrollView className="px-0 pt-[37px]">
        {content.map((c) => (
          <View key={c.id} className="px-3">
            <View className="gap-[7px] flex-row-reverse pl-[110px]">
              <Text className="text-[#DFD09C] text-[14px] leading-[20px] font-bold">
                {c.heading}
              </Text>
              <Image source={c.image} />
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.lineContainer}>
                <View style={styles.horizontalLine} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Podcast;

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
  },
});
