import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React, {FC} from 'react';
import {TaskType, tasks} from '@/components/pages/TaskTasker';
import FilterIcon from '@/assets/images/icons/filter-icon';
import BackArrow from '@/assets/images/icons/back-arrow';
import {router} from 'expo-router';

const TaskHistory = () => {
	return (
		<FlatList
			data={tasks}
			renderItem={({item}) => <Task task={item} />}
			className="flex-1 px-[5%] gap-y-5 py-5"
			ListHeaderComponent={() => (
				<View className="gap-x-2 flex-row items-center justify-between my-5">
					<View className="gap-x-2 flex-row items-center justify-between mb-5">
						<Pressable onPress={() => router.back()}>
							<BackArrow />
						</Pressable>
						<Text className="text-black font-bold text-xl">All History</Text>
					</View>
					<FilterIcon />
				</View>
			)}
			ListEmptyComponent={() => (
				<View className="flex-1 justify-center items-center">
					<Text>There're no new tasks at the moment</Text>
				</View>
			)}
		/>
	);
};

export default TaskHistory;

const Task: FC<{task: TaskType}> = ({task}) => {
	return (
		<View className="p-4 border-[2px] border-[#F3F5FF] rounded-lg mb-8">
			<View className="flex-row flex-1 items-center gap-x-3">
				<Image
					source={{
						uri:
							task.user.avatar ||
							'https://toyib.vercel.app/static/media/profileavatar.0d99c3ae75efbac1342f.png',
					}}
					className="w-12 h-12 rounded-full bg-[#e2d7d3]"
				/>
				<View className="flex-1 gap-y-1">
					<Text className="font-bold text-lg text-[#000] capitalize underline">
						{task.user.fullName}
					</Text>
					<Text className="capitalize opacity-60 font-medium">
						Task Detail: {task.desc}
					</Text>
				</View>
				<View>
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
		</View>
	);
};
