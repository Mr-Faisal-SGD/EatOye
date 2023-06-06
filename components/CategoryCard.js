import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryCard = ({ imgUrl, type, id }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Category", {
          id,
          type,
        });
      }}
      className="relative mr-2"
    >
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {type}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
