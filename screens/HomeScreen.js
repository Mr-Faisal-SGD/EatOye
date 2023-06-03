import { View, Text, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
// import { ScrollView } from "react-native-web";
import FeaturedRow from "../components/FeaturedRow";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-2">
      <View className="flex-row px-3 pb-3 items-center space-x-2">
        <Image source={require("../assets/menu-Button.png")} />
        <View className="flex-row">
          <Text className="text-2xl">Current Location</Text>
          <ChevronDownIcon color="#F2A902" size={30} />
        </View>
      </View>

      {/* Search Bar*/}

      <View className="flex-row px-3 space-x-2 pb-2">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="#110A00" size={30} />
          <TextInput placeholder="Searching Here!" keyboardType="default" />
        </View>
      </View>

      {/* Body */}

      <ScrollView className="bg-gray-100">
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="Testing"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Tasty Discounts */}
        <FeaturedRow
          id="Testing"
          title="Featured"
          description="Paid placements from our partners"
        />

        {/* Offers near you */}
        <FeaturedRow
          id="Testing"
          title="Featured"
          description="Paid placements from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
