import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
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
        <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Testing"
          rating={4.5}
          genre="Pakistani"
          address="123 Testing"
          short_description="Testing"
          dishes={["Testing", "Testing", "Testing"]}
          long={123}
          lat={123}
        />
         <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Testing"
          rating={4.5}
          genre="Pakistani"
          address="123 Testing"
          short_description="Testing"
          dishes={["Testing", "Testing", "Testing"]}
          long={123}
          lat={123}
        />
         <RestaurantCard
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Testing"
          rating={4.5}
          genre="Pakistani"
          address="123 Testing"
          short_description="Testing"
          dishes={["Testing", "Testing", "Testing"]}
          long={123}
          lat={123}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
