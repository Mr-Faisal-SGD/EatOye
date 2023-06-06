import "react-native-url-polyfill/auto";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./store";
import BasketScreen from "./screens/BasketScreen";
import PreparingScreen from "./screens/PreparingScreen";
import DeliveryScreen from "./screens/DeliveryScreen";
import AllRestaurantScreen from "./screens/AllRestaurantScreen";
import CategoryScreen from "./screens/CategoryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen} />
            <Stack.Screen
              name="PreparingScreen"
              component={PreparingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Delivery"
              component={DeliveryScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AllRestaurant"
              component={AllRestaurantScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Category"
              component={CategoryScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
