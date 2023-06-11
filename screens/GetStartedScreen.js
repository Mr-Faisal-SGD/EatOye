import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ArrowRightIcon } from "react-native-heroicons/solid";

const GetStartedScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#E5E5E5] h-full flex-col items-center justify-between">
      <View className="mt-32">
        <View>
          <Image source={require("../assets/Logo-placeholder.png")} />
        </View>
        <View className="items-center">
          <Text className="text-4xl">Welcome!</Text>
          <Text className="text-xl">Order your food at your doorstep</Text>
        </View>
      </View>
      <View className="mb-10 relative z-50">
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          className="flex-row rounded-sm bg-[#E5E5E5] px-16 py-1"
        >
          <Text className="text-xl text-[#F2A902]">
            Don't Wait, Get Started
          </Text>
          <Text className="absolute left-64 top-2">
            <ArrowRightIcon color="#F2A902" size={20} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ top: "76%" }} className="absolute z-0">
        <Image source={require("../assets/circles.png")} />
      </View>
    </View>
  );
};

export default GetStartedScreen;
