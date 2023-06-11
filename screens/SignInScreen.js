import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();
  const onSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Home");
      })
      .catch(() => {
        alert("Invalid email or password");
      });
  };

  return (
    <KeyboardAvoidingView className="relative bg-[#E5E5E5]">
      <View className="absolute left-8 top-16">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color="#F2A902" size={20} />
        </TouchableOpacity>
      </View>
      <View className="mt-36 flex-row space-x-3">
        <Text className="w-6 bg-[#F2A902]"></Text>
        <Text className="text-4xl text-[#F2A902]">SIGN IN</Text>
      </View>
      <View className="bg-white mx-6 mt-20 pb-6 rounded-md z-50">
        <View className="mx-6 mt-6">
          <TextInput
            className="p-2 px-4 bg-[#E5E5E5]"
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            className="p-2 px-4 my-4 bg-[#E5E5E5]"
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity
            onPress={onSignIn}
            className="rounded-sm bg-[#F2A902] py-1 mt-28 items-center"
          >
            <Text className="text-xl text-white">Login</Text>
            <Text className="absolute left-56 top-2">
              <ArrowRightIcon color="white" size={20} />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="items-center mt-32 pb-36 z-50">
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text className="text-base text-white">Create new account</Text>
        </TouchableOpacity>
      </View>
      <View style={{ top: "67%" }} className="absolute z-0">
        <Image source={require("../assets/circles.png")} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignInScreen;
