import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {router} from 'expo-router';
import HomeIcon from '@/assets/images/icons/home-icon';
import SearchIcon from '@/assets/images/icons/search-icon';
import MessageIcon from '@/assets/images/icons/message-icon';
import TaskIcon from '@/assets/images/icons/task-icon';
import SettingsIcon from '@/assets/images/icons/settings-icon';

const TabBarTasker = ({props}: {props: any}) => {
	const tabRoutes = [
		{
			route: '',
			label: 'Home',
			icon: <HomeIcon />,
		},
		{
			route: 'search',
			label: 'Search',
			icon: <SearchIcon />,
		},
		{
			route: 'message',
			label: 'Message',
			icon: <MessageIcon />,
		},
		{
			route: 'task',
			label: 'Task',
			icon: <TaskIcon />,
		},
		{
			route: 'settings',
			label: 'Settings',
			icon: <SettingsIcon />,
		},
	];

	return (
		<View className="bg-[#8b8b8b11] pt-[2px]">
			<View className="px-5 justify-between items-center flex-row gap-x-2 bg-white">
				{tabRoutes.map((routePage, index) => (
					<Pressable
						onPress={() => router.replace(routePage.route)}
						className="justify-center items-center gap-y-1 py-5"
						key={routePage.label}
					>
						{props.state.index === index && (
							<View className="w-14 h-1 absolute bg-primary top-[-2px] rounded-lg"></View>
						)}
						<View className="h-5">{routePage.icon}</View>
						<Text className="text-black font-bold">{routePage.label}</Text>
					</Pressable>
				))}
			</View>
		</View>
	);
};

export default TabBarTasker;
