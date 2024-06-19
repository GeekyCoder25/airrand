import {
	View,
	Text,
	ScrollView,
	ImageBackground,
	Pressable,
	Image,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import {tasks} from '@/components/pages/TaskTasker';
import {router, useLocalSearchParams} from 'expo-router';
import {MaterialIcons} from '@expo/vector-icons';
import EditIcon from '@/assets/images/icons/edit-icon';

const PostDetails = () => {
	const {post_id} = useLocalSearchParams();

	const post = tasks.find(task => task._id === post_id);

	if (!post) {
		return (
			<View>
				<Text className="text-black font-bold text-lg capitalize">
					No found post with this ID
				</Text>
			</View>
		);
	}
	return (
		<ScrollView className="flex-1  gap-y-5">
			<ImageBackground
				source={
					post.image
						? {uri: post.image}
						: require('../../assets/images/task.png')
				}
				className="h-64"
			>
				<View className="flex-row items-center p-5 z-10">
					<Pressable
						className="flex-row items-center"
						onPress={() => router.back()}
					>
						<MaterialIcons name="arrow-back" color={'#fff'} size={24} />
					</Pressable>
					<Text className="ml-3 font-bold text-lg capitalize text-white">
						post detail
					</Text>
				</View>
				<View className="w-full h-full bg-black opacity-30 absolute top-0 bottom-0" />
			</ImageBackground>
			<View className="px-[7%] py-6">
				<View>
					<Text className="capitalize font-bold text-2xl w-3/4 max-w-sm">
						{post.title}
					</Text>
				</View>

				<View>
					<View>
						<Text className="opacity-50 font-semibold capitalize mt-5">
							{post.desc}
						</Text>
					</View>

					<View>
						<Text className="text-black font-bold text-xl capitalize my-6">
							Pricing
						</Text>
						<View className="flex-row gap-x-5 items-center">
							<View className="border-2 border-[#F3F5FF] p-5 px-10 rounded-lg">
								<Text className="font-bold capitalize">
									₦{post.price.toLocaleString()}
								</Text>
							</View>
						</View>
					</View>
					<View>
						<Text className="text-black font-bold text-xl capitalize my-6">
							Location
						</Text>
						<View className="flex-row gap-x-5 items-center">
							<View className="border-2 border-[#F3F5FF] p-5 px-10 rounded-lg">
								<Text className="font-bold capitalize">{post.location}km</Text>
							</View>
						</View>
					</View>
					<View>
						<Text className="text-black font-bold text-xl capitalize my-6">
							Date
						</Text>
						<View className="flex-row gap-x-5 items-center">
							<View className="border-2 border-[#F3F5FF] p-5 px-10 rounded-lg">
								<Text className="font-bold capitalize">
									₦{post.price.toLocaleString()}
								</Text>
							</View>
						</View>
					</View>
					<View>
						<Text className="text-black font-bold text-xl capitalize my-6">
							Project Type
						</Text>
						<View className="flex-row gap-x-5 items-center">
							<View className="border-2 border-[#F3F5FF] p-5 px-10 rounded-lg">
								<Text className="font-bold capitalize">Onsite</Text>
							</View>
							<View className="border-2 border-[#F3F5FF] p-5 px-10 rounded-lg">
								<Text className="font-bold capitalize">Remote</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => router.push('post-task')}
						className="bg-secondary rounded-full absolute p-4 right-0 bottom-0"
					>
						<EditIcon />
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default PostDetails;
