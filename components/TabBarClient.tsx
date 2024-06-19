import React, {FC} from 'react';
import {View, Text, Pressable} from 'react-native';
import {router} from 'expo-router';
import SearchIcon from '@/assets/images/icons/search-icon';
import MessageIcon from '@/assets/images/icons/message-icon';
import TaskIcon from '@/assets/images/icons/task-icon';
import HomeIconClient from '@/assets/images/icons/home-icon-client';
import NotificationIcon from '@/assets/images/icons/notification-icon';

const TabBarClient: FC<{props: any}> = ({props}) => {
	const tabRoutes = [
		{
			route: 'task',
			label: 'Task History',
			icon: <TaskIcon color={'#2F3C7E'} />,
		},
		{
			route: 'message',
			label: 'Message',
			icon: <MessageIcon color={'#2F3C7E'} />,
		},
		{
			route: '',
			label: '',
			fullIcon: (
				<Pressable
					onPress={() => router.replace('(tabs)')}
					className="bg-secondary rounded-full justify-center items-center gap-y-1 w-16 h-16 -translate-y-9"
				>
					<HomeIconClient />
				</Pressable>
			),
		},
		{
			route: 'settings',
			label: 'Notifications',
			icon: <NotificationIcon color={'#2F3C7E'} />,
		},
		{
			route: 'search',
			label: 'Search',
			icon: <SearchIcon color={'#2F3C7E'} />,
		},
	];

	return (
		<View className="bg-[#8b8b8b11] pt-[2px]">
			<View
				className="px-3 pt-4 justify-between flex-row gap-x-0 bg-white"
				style={{
					elevation: 5,
					shadowColor: '#2F3C7E',
				}}
			>
				{tabRoutes.map((routePage, index) => (
					<View key={routePage.label} className="flex-1">
						{routePage.fullIcon || (
							<Pressable
								onPress={() => router.replace(routePage.route)}
								className="justify-center items-center gap-y-1 flex-nowrap"
							>
								{props.state.index === index && (
									<View className="w-14 h-1 absolute bg-secondary -top-[18px] rounded-lg"></View>
								)}
								<View className="h-5">{routePage.icon}</View>
								<Text className="text-black font-bold text-center max-h-4">
									{routePage.label}
								</Text>
							</Pressable>
						)}
					</View>
				))}
			</View>
		</View>
	);
};

export default TabBarClient;
