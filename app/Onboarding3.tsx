import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Link, useRouter} from 'expo-router';

const Onboarding3 = () => {
	const navigation = useRouter();
	return (
		<View className="w-full h-screen bg-white flex  items-center pt-6 gap-[3px]">
			<View className="w-[85%] bg-white flex ">
				<Link href="/onboarding4">
					<Text className=" text-black font-bold text-lg text-right">Skip</Text>
				</Link>
			</View>

			<View className="mb-5 w-[80%] h-[400px] flex justify-center items-center  ">
				<Image source={require('../assets/images/hire.png')}></Image>
			</View>
			<Text className="text-3xl font-bold text-black">
				Hire A <Text className="text-[#EA1588]">Professional</Text>
			</Text>
			<Text className="w-[70%] text-[14px] text-center mb-[20px]">
				Send Our Verified Professional On Errand And Deliver At The Agreement
				Day.
			</Text>
			<View className="flex justify-center items-center w-full h-[50px]">
				<Image source={require('../assets/images/slidecircle3.png')}></Image>
			</View>

			{/* button */}
			<TouchableOpacity
				className="bg-[#EA1588] px-[35%] py-[20px] rounded-xl"
				onPress={() => navigation.navigate('onboarding4')}
			>
				<Link href="/Onboarding2">
					<Text className="text-[20px] text-white">Next</Text>
				</Link>
			</TouchableOpacity>
		</View>
	);
};

export default Onboarding3;

const styles = StyleSheet.create({});
