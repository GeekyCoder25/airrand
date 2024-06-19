import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

interface NotificationType {
	_id: string;
	title: string;
	body: string;
}

const Notification = () => {
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
		<ScrollView>
			<View className="px-[5%] flex-1 py-5 gap-y-5">
				{notifications.map(notification => (
					<View
						key={notification._id}
						className="bg-[#8b8b8b11] p-[3px] pt-[6px] rounded-lg"
					>
						<View className="gap-y-1 p-5 bg-white rounded-md">
							<Text className="font-bold capitalize text-lg">
								{notification.title}
							</Text>
							<Text>{notification.body}</Text>
						</View>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

export default Notification;
