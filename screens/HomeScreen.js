import { View, Text, Image, TextInput, ScrollView, Alert } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
// import { ScrollView } from "react-native-web";
import FeaturedRow from "../components/FeaturedRow";
import Categories from "../components/Categories";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();

        Alert.alert("Logout?", "Are you Sure!", [
          { text: "Cancel", style: "cancel", onPress: () => {} },
          {
            text: "Yes",
            style: "destructive",
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]);
      }),
    [navigation]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `
      )
      .then((data) => {
        setFeaturedCategories(data);
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

        <View className="mb-32">
          {featuredCategories?.map((category) => (
            <FeaturedRow
              key={category._id}
              id={category._id}
              title={category.name}
              description={category.short_description}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
