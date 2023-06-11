import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const GetStarted2Screen = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#FFF1D6] flex-col justify-between h-full relative">
      <View></View>
      <View className="bg-[#FFC901] h-1/3 items-center">
        <Text className="text-white mt-16 mx-20 text-base text-center">
          Get your favorite food delivered at your door step.
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          className="mt-10 bg-white px-28 py-2 rounded-sm"
        >
          <Text className="text-base text-[#FFC901]">Get Started</Text>
          <View className="absolute top-3 left-60">
            <ArrowRightIcon size={18} color="#FFC901" />
          </View>
        </TouchableOpacity>
      </View>
      <Image
        className="absolute top-28"
        source={require("../assets/Illustration.png")}
      />
    </View>
  );
};

export default GetStarted2Screen;
