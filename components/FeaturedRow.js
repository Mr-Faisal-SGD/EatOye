import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import sanityClient from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurants, setRestaurants] = useState([]);
  let images = [];

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type-> {
          name
        }
      },
    }[0] 
    `,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  const render = () => {
    return restaurants?.map((restaurant) => (
      <RestaurantCard
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
    ));
  };

  return (
    <View>
      <View className="flex-row mt-4 items-center justify-between px-4">
        <Text className="text-2xl">{title}</Text>
        <Text className="text-lg">
          {" "}
          View All
          <ChevronRightIcon size={15} />
        </Text>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Restaurant Cards */}

        {/* {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={images[1]}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))} */}

        {render()}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
