import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = () => {
  const [text, setText] = useState("");
  return (
    <View className="flex py-20 px-10 gap-5 h-full bg-[#0a2232]">
      <View className="flex gap-2">
        <Text className="text-white">First Name</Text>
        <TextInput
          className="border-2 border-gray-400 p-2 rounded-md text-[white]"
          placeholder="Enter your name"
          defaultValue={text}
          placeholderTextColor={"gray"}
        ></TextInput>
      </View>
      <View className="flex gap-2">
        <Text className="text-white">Last Name</Text>
        <TextInput
          className="border-2 border-gray-400 p-2 rounded-md text-[white]"
          placeholder="Enter your name"
          defaultValue={text}
          placeholderTextColor={"gray"}
        ></TextInput>
      </View>
      <View className="flex gap-2 text-[white]">
        <Text className="text-white">Age</Text>
        <TextInput
          keyboardType="numeric"
          className="border-2 border-gray-400 p-2 rounded-md text-[white]"
          placeholder="Enter your name"
          placeholderTextColor={"gray"}
        ></TextInput>
      </View>
      <View className="flex gap-2 text-[white]">
        <Text className="text-white">Description</Text>
        <TextInput
          keyboardType="description"
          className="border-2 border-gray-400 p-2 rounded-md text-[white]"
          placeholder="Enter your name"
          placeholderTextColor={"gray"}
          multiline={true}
        ></TextInput>
      </View>
      <TouchableOpacity onPress={() => Alert.alert("Button pressed")}>
        <View className="rounded-full bg-[#1f4068] p-2 flex items-center justify-center">
          <Text className="text-[white]">SUBMIT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
