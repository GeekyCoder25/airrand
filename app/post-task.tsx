import {View, Text, ScrollView, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import BackArrow from '@/assets/images/icons/back-arrow';
import {router} from 'expo-router';
import {FontAwesome} from '@expo/vector-icons';
import Button from '@/components/Button';

const PostTask = () => {
	const [formData, setFormData] = useState({
		title: '',
		skills: '',
		description: '',
	});
	return (
		<View className="p-[5%] flex-1">
			<Pressable
				onPress={() => router.back()}
				className="flex-row gap-x-3 items-center"
			>
				<BackArrow />
				<Text className="font-bold text-xl">Post</Text>
			</Pressable>
			<ScrollView className="flex-1 gap-y-5 mt-3">
				<Text className="font-bold text-2xl">
					Post Your <Text className="text-secondary">Task</Text>
				</Text>
				<View className="flex-row gap-x-3 pt-2">
					<View className="w-20 h-0.5 bg-secondary rounded-md" />
					<View className="w-20 h-0.5 bg-black rounded-md" />
					<View className="w-20 h-0.5 bg-black rounded-md" />
				</View>

				<View className="pt-2 gap-y-5">
					<View>
						<Text className="font-semibold">Post Title</Text>
						<TextInput
							className="border-[1px] border-secondary mt-3 p-3 pr-14 rounded-lg"
							maxLength={60}
							onChangeText={text =>
								setFormData(prev => {
									return {
										...prev,
										title: text,
									};
								})
							}
						/>
						<Text className="absolute bottom-1 right-3 text-xs font-semibold">
							{formData.title.length} / 60
						</Text>
					</View>
					<View>
						<Text className="font-semibold">Must-Have</Text>
						<TextInput
							className="border-[1px] border-secondary mt-3 p-3 rounded-lg h-20 font-semibold text-sm"
							maxLength={60}
							onChangeText={text =>
								setFormData(prev => {
									return {
										...prev,
										skills: text,
									};
								})
							}
							placeholder="Tell tasker what they need to have in order to complete the task. e.g tools, cleaning products etc"
							placeholderTextColor={'rgba(0,0,0,0.4)'}
							multiline
						/>
					</View>
					<View>
						<Text className="font-semibold">Description</Text>
						<TextInput
							className="border-[1px] border-secondary mt-3 p-3 rounded-lg h-28 font-semibold text-sm"
							maxLength={500}
							onChangeText={text =>
								setFormData(prev => {
									return {
										...prev,
										description: text,
									};
								})
							}
							multiline
						/>
						<Text className="absolute bottom-1 right-3 text-xs font-semibold">
							{formData.description.length} / 500
						</Text>
					</View>

					<View>
						<Text className="font-semibold">Location</Text>
						<View className="border-[1px] border-secondary mt-3 p-3 rounded-lg font-semibold text-sm h-10" />
						<View className="absolute top-[57%] right-3">
							<FontAwesome name="chevron-down" />
						</View>
					</View>

					<View>
						<Text className="font-semibold">Location Distance</Text>
						<View className="flex-row gap-x-5 items-center">
							<View className="flex-row items-center border-[1px] border-secondary mt-3 p-3 rounded-lg">
								<TextInput className="w-10 font-bold" inputMode="numeric" />
								<Text className="font-semibold">km</Text>
							</View>
							<View className="w-3 h-1 bg-black mt-2" />
							<View className="flex-row items-center border-[1px] border-secondary mt-3 p-3 rounded-lg">
								<TextInput className="w-10 font-bold" inputMode="numeric" />
								<Text className="font-semibold">km</Text>
							</View>
						</View>
					</View>

					<Button
						onPress={() => router.push('post-task2')}
						style="mt-10 justify-center items-center rounded-lg"
					>
						<Text className="text-white py-5 font-semibold">Continue</Text>
					</Button>
				</View>
			</ScrollView>
		</View>
	);
};

export default PostTask;
