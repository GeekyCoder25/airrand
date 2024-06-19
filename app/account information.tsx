import {
	View,
	Text,
	TextInput,
	Pressable,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import Button from '@/components/Button';

const AccountInfo = () => {
	const user = {
		fullName: 'John Doe',
		email: 'johndoe@gmail.com',
	};
	const [hidePassword, setHidePassword] = useState(true);
	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			touchSoundDisabled
		>
			<View className="px-[5%] flex-1 py-5">
				<View className="gap-y-3">
					<Text className="font-semibold text-xl">Full Name</Text>
					<View className="border-2 border-[#FFF5F6] p-3 rounded-lg mb-8 flex-row items-center justify-between">
						<Text className="font-semibold text-xl">{user.fullName}</Text>
					</View>
				</View>
				<View className="gap-y-3">
					<Text className="font-semibold text-xl">Email</Text>
					<View className="border-2 border-[#FFF5F6] p-3 rounded-lg mb-8 flex-row items-center justify-between">
						<Text className="font-semibold text-xl">{user.email}</Text>
					</View>
				</View>
				<View className="gap-y-3">
					<Text className="font-semibold text-xl">Password</Text>
					<View className="border-2 border-[#FFF5F6]  rounded-lg mb-8 flex-row items-center justify-between">
						<TextInput
							className="font-semibold text-xl flex-1 p-3"
							secureTextEntry={hidePassword}
						/>
						<Pressable
							onPress={() => setHidePassword(prev => !prev)}
							className="p-3"
						>
							<Ionicons
								name={hidePassword ? 'eye-sharp' : 'eye-off-sharp'}
								color={'rgba(0, 0, 0, 0.5)'}
								size={20}
							/>
						</Pressable>
					</View>
				</View>
				<Button style="p-5 justify-center items-center rounded-2xl my-5">
					<Text className="text-white font-bold">Update</Text>
				</Button>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default AccountInfo;
