import BackArrow from '@/assets/images/icons/back-arrow';
import Notification from '@/components/pages/Notification';
import {router} from 'expo-router';
import {View} from 'react-native';
import {Pressable, Text} from 'react-native';

const Notifications = () => {
	return (
		<>
			<View className="p-[5%]">
				<Pressable
					className="flex-row items-center"
					onPress={() => router.back()}
				>
					<BackArrow className="mr-3" />
					<Text className="text-black font-bold text-lg capitalize">
						Notification
					</Text>
				</Pressable>
			</View>
			<Notification />
		</>
	);
};

export default Notifications;
