import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackArrow from '@/assets/images/icons/back-arrow';
import {useRouter} from 'expo-router';

interface NotificationType {
	_id: string;
	title: string;
	body: string;
}
const Notifications = () => {
	const router = useRouter();
	const [notifications, setNotifications] = useState<NotificationType[]>([]);

	useEffect(() => {
		setNotifications([
			{
				_id: '28783812389',
				title: 'hey, welcome alimi.',
				body: 'heres a new time to hire a professional to handle your work for you.',
			},
			{
				_id: '2878312389',
				title: 'hey, welcome alimi.',
				body: 'heres a new time to hire a professional to handle your work for you.',
			},
		]);
	}, []);
	return (
		<ScrollView className="bg-[#fff]">
			<View className="px-[5%] flex-1 py-5 ">
				<Pressable
					className="flex-row items-center"
					onPress={() => router.back()}
				>
					<BackArrow className="mr-3" />
					<Text className="text-black font-bold text-lg capitalize">
						Notification
					</Text>
				</Pressable>
				<View className="my-10">
					{notifications.map(notification => (
						<View
							key={notification._id}
							className="gap-y-2 border-[#F3F5FF] border-[1px] shadow-sm mb-10 p-4 rounded-md"
						>
							<Text className="text-black font-bold text-lg capitalize">
								{notification.title}
							</Text>
							<Text className="capitalize opacity-50 font-semibold">
								{notification.body}
							</Text>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	);
};

export default Notifications;
