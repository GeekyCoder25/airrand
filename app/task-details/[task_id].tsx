import {
	View,
	Text,
	ScrollView,
	Pressable,
	Image,
	Dimensions,
} from 'react-native';
import React from 'react';
import {router, useLocalSearchParams} from 'expo-router';
import BackArrow from '@/assets/images/icons/back-arrow';
import {tasks} from '../(tabs)/task';
import TaskMessageIcon from '@/assets/images/icons/task-message-icon';

const TaskDetails = () => {
	const {task_id} = useLocalSearchParams();

	const task = tasks.find(task => task._id === task_id);

	if (!task) {
		return (
			<View>
				<Text className="text-black font-bold text-lg capitalize">
					No found task with this ID
				</Text>
			</View>
		);
	}

	return (
		<ScrollView className="flex-1 px-[5%] gap-y-5 py-5">
			<View
				className="w-full absolute"
				style={{height: Dimensions.get('screen').height}}
			>
				<Pressable
					onPress={() => router.push('/message')}
					className="bg-primary w-12 h-12 rounded-full justify-center items-center absolute bottom-1/4 right-0"
				>
					<TaskMessageIcon />
				</Pressable>
			</View>
			<View className="min-h-full">
				<View className="flex-row items-center">
					<Pressable
						className="flex-row items-center"
						onPress={() => router.back()}
					>
						<BackArrow className="mr-3" />
					</Pressable>
					<Text className="text-black font-bold text-lg capitalize">
						task status
					</Text>
					<View className="flex-1">
						{task.status === 'active' && (
							<Text className="text-[#12D153] text-right font-semibold -mb-1">
								Active
							</Text>
						)}
						{task.status === 'in-progress' && (
							<Text className="text-[#FFA902] text-right font-semibold -mb-1">
								In Progress
							</Text>
						)}
						{task.status === 'completed' && (
							<Text className="text-[#FFA902] text-right font-semibold -mb-1">
								Completed
							</Text>
						)}
						{task.status === 'cancelled' && (
							<Text className="text-[#FF2E00] text-right font-semibold -mb-1">
								Cancelled
							</Text>
						)}
					</View>
				</View>

				<View className="pt-5">
					<View className="flex-row justify-between items-center gap-x-10">
						<Text className="text-black font-semibold text-2xl capitalize flex-[2]">
							{task.title}
						</Text>
						<Text className="text-black font-bold text-lg capitalize flex-1 text-right">
							₦{task.price.toLocaleString()}
						</Text>
					</View>
					<View className="mt-5 flex-row gap-x-5">
						<Image
							source={
								task.user.avatar
									? {uri: task.user.avatar}
									: require('../../assets/images/gravatar.jpg')
							}
							width={100}
							height={100}
							className="w-10 h-10 rounded-full"
						/>
						<View>
							<Text className="text-black font-medium text-lg capitalize">
								{task.user.fullName}
							</Text>
							<Text className="font-semibold">
								{task.user.isCertified && 'Certified Client'}
							</Text>
						</View>
					</View>
					<View></View>
					<Text className="text-black font-bold text-xl capitalize my-6">
						Description
					</Text>
					<Text className="opacity-50 font-semibold capitalize">
						{task.desc}
					</Text>
				</View>

				<View className="flex-1 justify-center items-center gap-y-10">
					<Text className="text-black font-semibold text-lg capitalize">
						Time Remaining:
					</Text>
					<View className="flex-row gap-x-8">
						<Text>05 Days</Text>
						<Text>44 Min</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default TaskDetails;
