import {View, Text, Pressable} from 'react-native';
import React from 'react';
import ChevronRightIcon from '@/assets/images/icons/chevron-right-icon';
import {router} from 'expo-router';

const TaskClient = () => {
	const routes = [
		{
			route: 'task-history',
			label: 'Task History',
		},
		{
			route: 'offers',
			label: 'Offers Received',
		},
		{
			route: 'post-history',
			label: 'Post History',
		},
	];
	return (
		<View className="flex-1 px-[5%] py-5 gap-y-5">
			<Text className="text-black font-bold text-2xl">Category</Text>
			{routes.map(route => (
				<Pressable
					onPress={() => router.navigate(route.route)}
					key={route.label}
					className="flex-row justify-between items-center border-[2px] border-[#F3F5FF] p-4 rounded-lg mb-2"
				>
					<Text className="font-bold text-lg">{route.label}</Text>
					<ChevronRightIcon />
				</Pressable>
			))}
		</View>
	);
};

export default TaskClient;
