import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const BottomNav = ({ children, activeTab, setActiveTab }) => {
  const tabList = [
    {
      id: 1,
      title: "Home",
      icon: "home",
    },
    {
      id: 2,
      title: "Favourites",
      icon: "star",
    },
    {
      id: 3,
      title: "Account",
      icon: "account-circle",
    },
    {
      id: 4,
      title: "Category",
      icon: "category",
    },
  ];

  return (
    <View className="flex gap-5 h-[100%] bg-[#0a2232] flex-col justify-between relative pt-1 pb-10 m-0">
      <ScrollView className="flex flex-col rounded-[10px] h-auto px-3">
        {children}
      </ScrollView>

      {/* Bottom Bar */}
      <View className="flex flex-row py-5 items-center justify-center w-[100%] content-center bg-[#242C37] absolute bottom-0 m-0">
        {tabList.map((tab) => (
          <View key={tab.id} className="flex">
            <TouchableOpacity onPress={() => setActiveTab(tab.id)}>
              <View
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  paddingLeft: 30,
                  paddingRight: 10,
                }}
              >
                <MaterialIcons
                  name={tab.icon}
                  size={24}
                  color={activeTab === tab.id ? "white" : "gray"}
                />

                <Text
                  style={{
                    color: activeTab === tab.id ? "white" : "gray",
                    fontSize: 11,
                    lineHeight: 16,
                  }}
                >
                  {tab.title.toUpperCase()}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BottomNav;
