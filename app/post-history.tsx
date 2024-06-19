import {View, Text, FlatList, Image} from 'react-native';
import React, {FC} from 'react';
import {TaskType, tasks} from '@/components/pages/TaskTasker';
import {router} from 'expo-router';
import BackArrow from '@/assets/images/icons/back-arrow';
import {Pressable} from 'react-native';
import FilterIcon from '@/assets/images/icons/filter-icon';
import Button from '@/components/Button';

const PostHistory = () => {
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
						<Text className="text-black font-bold text-xl">All Post</Text>
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

export default PostHistory;

const Task: FC<{task: TaskType}> = ({task}) => {
	return (
		<View className="p-5 border-[2px] border-[#F3F5FF] rounded-lg mb-8">
			<View className="flex-1 gap-y-1">
				<Text className="font-bold text-xl text-[#000] capitalize">
					{task.title}
				</Text>
				<Text className="capitalize opacity-60 font-medium">{task.desc}</Text>
				<Button
					style="p-5 mt-5 rounded-lg justify-center items-center"
					onPress={() => router.navigate(`post-details/${task._id}`)}
				>
					<Text className="text-white text-center">View Detail</Text>
				</Button>
			</View>
		</View>
	);
};
