import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import React from "react";
import { useRouter, Link } from "expo-router";
// import { Link } from "expo-router";


const onboarding4 = () => {
  const { navigate } = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        className="flex-1 w-full h-full"
        source={require("../assets/images/back4.jpg")}
      >
        <View className="flex-1 absolute h-full w-full bg-black opacity-50" />
        <View className="flex-1 p-[5%] py-[10%]">
        <View className="w-[100%] flex mt-[20px]">
				<Link href="/Onboarding2">
					<Text className=" text-white font-bold text-lg text-right">Back</Text>
				</Link>
		</View>
          <View className="flex-1 justify-center items-center gap-y-8">
            <TouchableOpacity 
              onPress={() => navigate("login")}
              className="bg-[#2F3C7E] w-full p-5 rounded-lg justify-center items-center">
              <Text className="text-white">Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("accountSignup")}
              className="bg-[#EA1588] w-full p-5 rounded-lg justify-center items-center"
            >
              <Text className="text-white">Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default onboarding4;

const styles = StyleSheet.create({});
