import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useLayoutEffect, useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectRestaurant } from "../features/restaurantSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from "react-native-heroicons/outline";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();
  const total = useSelector(selectBasketTotal);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1">
      <View className="flex-row p-4 items-end bg-[#FFC901] h-28 space-x-2">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="p-2 bg-gray-100 h-9 rounded-lg"
          activeOpacity={0.6}
        >
          <ArrowLeftIcon size={20} color="#F2A902" />
        </TouchableOpacity>
        <Text className="text-white text-2xl">My Cart</Text>
      </View>
      <ScrollView>
        <ScrollView className="m-4 bg-white relative p-6 divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row justify-between space-x-1 p-3">
              <View className="flex-row space-x-1">
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-16 w-16 rounded-lg"
                />
                <View>
                  <Text className="flex-1 text-yellow-400 text-lg ">
                    {items[0]?.name}
                  </Text>

                  <Text className="text-black text-lg">
                    Rs {[items[0]?.price]}
                  </Text>
                </View>
              </View>

              <View className="flex-row space-x-2 absolute left-3/4 top-2/4">
                <TouchableOpacity
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  <MinusCircleIcon color="#FFC901" size={30} />
                </TouchableOpacity>
                <Text className="text-lg">{items.length}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(addToBasket({ id: key }))}
                >
                  <PlusCircleIcon color="#FFC901" size={30} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                className="absolute left-full"
                onPress={() => dispatch(removeFromBasket({ id: key }))}
              >
                <XCircleIcon color="#FFC901" size={20} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between text-lg">
          <Text>Total</Text>
          <Text>Rs {total}</Text>
        </View>
        <TouchableOpacity className="rounded-lg bg-[#FFC901] p-4">
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
