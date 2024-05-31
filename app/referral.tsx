import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';

const Referral = () => {
	return (
		<ScrollView className="h-full">
			<View className="w-[100%] items-center h-screen">
				<View className="w-[90%] h-[250px] bg-[#EA1588] mt-[50px] rounded-[20px] justify-center items-center">
					<Text className="text-white font-bold text-[25px]">
						Expand Your Network{' '}
					</Text>
					<Text className="text-white font-semibold text-[13px] mt-[10px]">
						Share To Your Friends And Earn Big Times
					</Text>
				</View>
				<View
					className="w-[85%] flex-row justify-between px-2 items-center h-[70px] mt-7"
					style={styles.border}
				>
					<Text className="font-bold text-[15px]">Referrals</Text>
					<View className="flex-row justify-center items-center gap-x-2">
						<Text className="text-[#EA1588] text-[12px]">
							htpps://www.airRands.com/jays0x
						</Text>
						<Image source={require('../assets/images/copy.png')}></Image>
					</View>
				</View>
				<View
					className="w-[85%] flex-row justify-between px-2 items-center h-[70px] mt-7"
					style={styles.border}
				>
					<Text className="font-bold text-[15px]">Refferal Code</Text>
					<View className="flex-row justify-center items-center gap-x-2">
						<Text className="text-[#EA1588] text-[12px]">DSC4556</Text>
						<Image source={require('../assets/images/copy.png')}></Image>
					</View>
				</View>
				<Text className="text-[20px] font-bold mt-[50px]">
					Share Through Social Media
				</Text>
				<View className="w-[90%] flex-row justify-center items-center gap-x-3 mt-[50px]">
					<View className="w-[40px] h-[40px] rounded-full bg-[#EA1588] justify-center items-center ">
						<Image source={require('../assets/images/linkedin.png')}></Image>
					</View>
					<View className="w-[40px] h-[40px] rounded-full bg-[#EA1588] justify-center items-center ">
						<Image source={require('../assets/images/whatsapp.png')}></Image>
					</View>
					<View className="w-[40px] h-[40px] rounded-full bg-[#EA1588] justify-center items-center ">
						<Image source={require('../assets/images/facebook.png')}></Image>
					</View>
					<View className="w-[40px] h-[40px] rounded-full bg-[#EA1588] justify-center items-center ">
						<Image source={require('../assets/images/instagram.png')}></Image>
					</View>
					<View className="w-[40px] h-[40px] rounded-full bg-[#EA1588] justify-center items-center ">
						<Image source={require('../assets/images/three dot.png')}></Image>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default Referral;

const styles = StyleSheet.create({
	border: {
		borderColor: '#e8eef1',
		borderWidth: 3,
		borderRadius: 15,
	},
});
