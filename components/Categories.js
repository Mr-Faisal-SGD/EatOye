import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
      `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("AllRestaurant")}
        className="relative mr-2"
      >
        <Image
          source={require("../assets/R.png")}
          className="h-20 w-20 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-black font-bold">
          All Restaurants
        </Text>
      </TouchableOpacity>

      {/* Categories */}
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          imgUrl={urlFor(category.image).url()}
          type={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
