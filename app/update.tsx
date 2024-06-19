import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {router} from 'expo-router';

const Update = () => {
	const [isUpdateAvailable, setIsUpdateAvailable] = useState(false);
	return (
		<Modal visible={!isUpdateAvailable} transparent className="flex-1">
			<View className="bg-black flex-1 absolute top-0 bottom-0 right-0 left-0 opacity-50" />
			<View className="flex-1 justify-center items-center">
				<View className="bg-white w-[90%] justify-center items-center p-10 rounded-lg">
					<Text className="font-bold text-secondary text-xl mt-2">
						<Text className="text-black">No</Text> Update
					</Text>

					<Text className="font-medium text-xs opacity-50 capitalize mt-2">
						Come Back Later
					</Text>

					<TouchableOpacity
						onPress={() => {
							setIsUpdateAvailable(false);
							router.dismissAll();
						}}
					>
						<Text className="font-bold text-secondary text-xl mt-10 underline">
							Back To Home
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default Update;
