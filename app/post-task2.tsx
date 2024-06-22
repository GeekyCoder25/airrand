// import {
// 	View,
// 	Text,
// 	ScrollView,
// 	Pressable,
// 	TextInput,
// 	Keyboard,
// 	TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import BackArrow from '@/assets/images/icons/back-arrow';
// import {router} from 'expo-router';
// import {FontAwesome} from '@expo/vector-icons';
// import Button from '@/components/Button';
// import CalendarIcon from '@/assets/images/icons/calendar-icon';
// import DateTimePicker, {
// 	DateTimePickerEvent,
// } from '@react-native-community/datetimepicker';

// interface FormDataType {
// 	pricing: number;
// 	date?: Date | undefined;
// }
// const PostTask2 = () => {
// 	const [formData, setFormData] = useState<FormDataType>({
// 		pricing: 0,
// 	});
// 	const [showPicker, setShowPicker] = useState(false);

// 	const handleDatePicker = (
// 		event: DateTimePickerEvent,
// 		selectedDate: Date | undefined
// 	) => {
// 		console.log(typeof selectedDate);

// 		if (selectedDate) {
// 			setShowPicker(false);
// 			switch (event.type) {
// 				case 'set':
// 					selectedDate.setMilliseconds(0);
// 					selectedDate.setSeconds(0);
// 					selectedDate.setMinutes(0);
// 					selectedDate.setHours(0);
// 					setFormData(prev => {
// 						return {
// 							...prev,
// 							date: selectedDate,
// 						};
// 					});
// 					break;
// 				default:
// 					break;
// 			}
// 		}
// 	};
// 	return (
// 		<Pressable onPress={Keyboard.dismiss} className="p-[5%] flex-1">
// 			<Pressable
// 				onPress={() => router.back()}
// 				className="flex-row gap-x-3 items-center"
// 			>
// 				<BackArrow />
// 				<Text className="font-bold text-xl">Back</Text>
// 			</Pressable>
// 			<View className="flex-1 gap-y-5 mt-3">
// 				<Text className="font-bold text-2xl">
// 					Post Your <Text className="text-secondary">Task</Text>
// 				</Text>
// 				<View className="flex-row gap-x-3 pt-2">
// 					<View className="w-20 h-0.5 bg-black rounded-md" />
// 					<View className="w-20 h-0.5 bg-secondary rounded-md" />
// 					<View className="w-20 h-0.5 bg-black rounded-md" />
// 				</View>

// 				<View className="flex-1 pt-2 gap-y-5">
// 					<View>
// 						<Text className="font-semibold">Pricing</Text>
// 						<View className="border-[1px] border-secondary mt-3 p-3 items-center-center rounded-lg flex-row">
// 							<Text className="font-semibold flex-1">NGN</Text>

// 							<TextInput
// 								className="font-bold"
// 								inputMode="decimal"
// 								onChangeText={text =>
// 									setFormData(prev => {
// 										return {
// 											...prev,
// 											pricing: Number(text),
// 										};
// 									})
// 								}
// 								placeholder="0.0"
// 								placeholderTextColor={'#000'}
// 							/>
// 						</View>
// 					</View>
// 					<View>
// 						<Text className="font-semibold">Date</Text>
// 						<View className="flex-row gap-x-4 items-end">
// 							<View className="border-[1px] border-secondary mt-3 justify-center items-start rounded-lg h-10 font-semibold text-sm flex-1">
// 								{showPicker ? (
// 									<DateTimePicker
// 										testID="dateTimePicker"
// 										value={new Date()}
// 										onChange={handleDatePicker}
// 										className=""
// 									/>
// 								) : (
// 									formData.date && (
// 										<Text className="font-semibold pl-3">
// 											{new Date(formData.date).toLocaleDateString()}
// 										</Text>
// 									)
// 								)}
// 							</View>
// 							<TouchableOpacity
// 								onPress={() => setShowPicker(prev => !prev)}
// 								className="bg-secondary p-3 rounded-xl justify-center"
// 							>
// 								<CalendarIcon />
// 							</TouchableOpacity>
// 						</View>
// 					</View>
// 				</View>
// 				<Button
// 					onPress={() => router.push('post-task3')}
// 					style="mt-10 justify-center items-center rounded-lg"
// 				>
// 					<Text className="text-white py-5 font-semibold">Continue</Text>
// 				</Button>
// 			</View>
// 		</Pressable>
// 	);
// };

// export default PostTask2;
