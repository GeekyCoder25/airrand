import {
	View,
	Text,
	ScrollView,
	Pressable,
	ImageBackground,
	Image,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import {router, useLocalSearchParams} from 'expo-router';
import {MaterialIcons} from '@expo/vector-icons';
import {requests as projects} from '@/components/pages/HomeTasker';

const ProjectDetails = () => {
	const {project_id} = useLocalSearchParams();

	const project = projects.find(project => project._id === project_id);

	if (!project) {
		return (
			<View>
				<Text className="text-black font-bold text-lg capitalize">
					No found task with this ID
				</Text>
			</View>
		);
	}
	return (
		<ScrollView className="flex-1  gap-y-5">
			<ImageBackground
				source={
					project.image
						? {uri: project.image}
						: require('../../assets/images/task.png')
				}
				className="h-64 p-5"
			>
				<View className="flex-row items-center">
					<Pressable
						className="flex-row items-center"
						onPress={() => router.back()}
					>
						<MaterialIcons name="arrow-back" color={'#fff'} size={24} />
					</Pressable>
					<Text className="ml-3 font-bold text-lg capitalize text-white">
						task details
					</Text>
				</View>

				<View>
					<Text className="capitalize font-bold text-3xl w-3/4 max-w-sm text-white mt-16">
						{project.title}
					</Text>
				</View>
			</ImageBackground>
			<View className="px-[5%]">
				<View className="mt-5 flex-row gap-x-5 items-center">
					<Image
						source={
							project.user.avatar
								? {uri: project.user.avatar}
								: require('../../assets/images/gravatar.jpg')
						}
						width={100}
						height={100}
						className="w-10 h-10 rounded-full"
					/>
					<View>
						<Text className="text-black font-bold text-lg capitalize">
							{project.user.fullName}
						</Text>
						<Text className="font-semibold text-xs">
							{project.user.isCertified && 'Certified Client'}
						</Text>
					</View>
					<View className="flex-1 items-end">
						<TouchableOpacity
							onPress={() => router.push('/message')}
							className="bg-primary py-3 px-6 rounded-lg"
						>
							<Text className="text-white font-bold">Contact</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View>
					<View>
						<Text className="text-black font-bold text-xl capitalize my-6">
							Description
						</Text>
						<Text className="opacity-50 font-semibold capitalize">
							{project.message}
						</Text>
					</View>

					<View>
						<Text className="text-black font-bold text-xl capitalize my-6">
							Pricing & Date
						</Text>
						<View className="flex-row gap-x-5 items-center">
							<View className="border-2 border-[#FFF5F6] p-5 px-10 rounded-lg">
								<Text className="font-bold capitalize">
									₦{project.price.toLocaleString()}
								</Text>
							</View>
							<View className="border-2 border-[#FFF5F6] p-5 px-10 rounded-lg">
								<Text className="font-bold">{project.period} days</Text>
							</View>
						</View>
					</View>
					<View>
						<Text className="text-black font-bold text-xl capitalize my-6">
							Project Type
						</Text>
						<View className="flex-row gap-x-5 items-center">
							<View className="border-2 border-[#FFF5F6] p-5 px-10 rounded-lg">
								<Text className="font-bold capitalize">{project.location}</Text>
							</View>
						</View>
					</View>
				</View>

				<View className="justify-center items-center mt-10">
					<TouchableOpacity
						onPress={() => {}}
						className="bg-primary rounded-lg p-5 w-full justify-center items-center"
					>
						<Text className="font-bold text-white">Send Proposal</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default ProjectDetails;
