import {
	View,
	Text,
	ScrollView,
	Pressable,
	TextInput,
	Keyboard,
	TouchableOpacity,
	Modal,
} from 'react-native';
import React, {useState} from 'react';
import BackArrow from '@/assets/images/icons/back-arrow';
import {router} from 'expo-router';
import Button from '@/components/Button';
import CameraIcon from '@/assets/images/icons/camera-icon';
import FileUploadIcon from '@/assets/images/icons/file-upload-icon';
import VideoIcon from '@/assets/images/icons/video-icon';
import CheckIcon from '@/assets/images/icons/check-icon';

const PostTask3 = () => {
	const [formData, setFormData] = useState({});
	const [isUploaded, setIsUploaded] = useState(false);

	return (
		<>
			<Pressable onPress={Keyboard.dismiss} className="p-[5%] flex-1">
				<Pressable
					onPress={() => router.back()}
					className="flex-row gap-x-3 items-center"
				>
					<BackArrow />
					<Text className="font-bold text-xl">Back</Text>
				</Pressable>
				<View className="flex-1 gap-y-5 mt-3">
					<Text className="font-bold text-2xl">
						Post Your <Text className="text-secondary">Task</Text>
					</Text>
					<View className="flex-row gap-x-3 pt-2">
						<View className="w-20 h-0.5 bg-black rounded-md" />
						<View className="w-20 h-0.5 bg-black rounded-md" />
						<View className="w-20 h-0.5 bg-secondary rounded-md" />
					</View>

					<View className="flex-1 gap-y-8">
						<View>
							<Text className="font-semibold">Your Image</Text>
							<View className="flex-row mt-5 gap-x-5">
								<View className="py-7 px-10 justify-center rounded-xl bg-[#F3F5FF]">
									<CameraIcon />
								</View>
								<View className="py-7 px-10 justify-center rounded-xl bg-[#F3F5FF]">
									<CameraIcon />
								</View>
								<View className="py-7 px-10 justify-center rounded-xl bg-[#F3F5FF]">
									<CameraIcon />
								</View>
							</View>
						</View>
						<View>
							<Text className="font-semibold">Upload Document</Text>
							<Text className="font-medium text-xs opacity-50 capitalize mt-2">
								upload any sample document that can be helpful for this project
							</Text>
							<View className="flex-row mt-5 gap-x-5">
								<View className="py-7 px-10 justify-center rounded-xl bg-[#F3F5FF]">
									<FileUploadIcon />
								</View>
							</View>
						</View>
						<View>
							<Text className="font-semibold">Upload Video</Text>
							<Text className="font-medium text-xs opacity-50 capitalize mt-2">
								upload video for better understanding
							</Text>
							<View className="flex-row mt-5 gap-x-5">
								<View className="py-7 px-10 justify-center rounded-xl bg-[#F3F5FF]">
									<VideoIcon />
								</View>
							</View>
						</View>
					</View>
					<View className="mt-10 flex-row items-center justify-center">
						<Text className="capitalize text-xs text-center font-semibold opacity-50">
							by clicking continue mean you agree to our platform{' '}
						</Text>
						<Text className="capitalize text-xs text-center font-semibold text-secondary underline">
							privacy
						</Text>
						<Text className="capitalize text-xs text-center font-semibold opacity-50">
							and{' '}
						</Text>
						<Text className="capitalize text-xs text-center font-semibold text-secondary underline">
							policy
						</Text>
					</View>
					<Button
						onPress={() => setIsUploaded(true)}
						style="mt-4 justify-center items-center rounded-lg"
					>
						<Text className="text-white py-5 font-semibold">Continue</Text>
					</Button>
				</View>
			</Pressable>
			{isUploaded && (
				<Modal visible={isUploaded} transparent className="flex-1">
					<View className="bg-black flex-1 absolute top-0 bottom-0 right-0 left-0 opacity-50" />
					<View className="flex-1 justify-center items-center">
						<View className="bg-white w-[90%] justify-center items-center p-10 rounded-lg">
							<CheckIcon />
							<Text className="font-bold text-secondary text-xl mt-2">
								Congratulation
							</Text>

							<Text className="font-medium text-xs opacity-50 capitalize mt-2">
								Your Post Is Live
							</Text>

							<TouchableOpacity
								onPress={() => {
									setIsUploaded(false);
									router.navigate(`post-details/309489`);
								}}
							>
								<Text className="font-bold text-secondary text-xl mt-10 underline">
									View Detail
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>
			)}
		</>
	);
};

export default PostTask3;
