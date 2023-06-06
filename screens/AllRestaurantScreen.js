import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import sanityClient, { urlFor } from "../sanity";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import BigRestaurantCard from "../components/BigRestaurantCard";

const AllRestaurantScreen = () => {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "restaurant"]{...,
      dishes[]->,
      type-> {
        name
      }}
      `
      )
      .then((data) => {
        setRestaurants(data);
      });
  }, []);

  return (
    <View className="pb-28">
      <View className="flex-row p-4 items-end bg-[#FFC901] h-28 space-x-2">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="p-2 bg-gray-100 h-9 rounded-lg"
          activeOpacity={0.6}
        >
          <ArrowLeftIcon size={20} color="#F2A902" />
        </TouchableOpacity>
        <Text className="text-white text-2xl">All Restaurants</Text>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <BigRestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default AllRestaurantScreen;
