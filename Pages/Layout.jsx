import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Layout = ({ children, activeTab, setActiveTab }) => {
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
    <View
      className="flex gap-5 h-full bg-[#0a2232]"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        paddingTop: 10,
        paddingBottom: 50,
        margin: 0,
        backgroundColor: "#0a2232",
      }}
    >
      {/* App Bar */}
      {/* <View
        style={{
          height: 50,
          backgroundColor: "#242C37",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>App Bar</Text>
      </View> */}

      <ScrollView
        style={{
          display: "flex",
          flexDirection: "column",
          borderRadius: 10,
          height: "auto",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {children}
      </ScrollView>

      {/* Bottom Bar */}
      <View
        className="flex gap-5"
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyItems: "center",
          justifyContent: "center",
          paddingVertical: 20,
          backgroundColor: "#242C37",
          display: "flex",
          position: "absolute",
          width: "100%",
          bottom: 0,
          margin: 0,
        }}
      >
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

export default Layout;
