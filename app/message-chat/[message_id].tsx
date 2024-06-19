import {
	InteractionManager,
	View,
	Text,
	Pressable,
	TextInput,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Platform,
} from 'react-native';
import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import {router, useLocalSearchParams} from 'expo-router';
import BackArrow from '@/assets/images/icons/back-arrow';
import {messages} from '../(tabs)/message';
import ThreeDotsIcon from '@/assets/images/icons/three-dots';
import FileSelectIcon from '@/assets/images/icons/file-select-icon';
import SendIcon from '@/assets/images/icons/send-icon';
import {ScrollView} from 'react-native';
import {randomUUID} from 'expo-crypto';
import {AppContext} from '@/context/AppContext';

interface ChatProps {
	user: string;
	_id: string;
	message: string;
	createdAt: string;
}

const MessageChat = () => {
	const {isClient} = useContext(AppContext);
	const {message_id} = useLocalSearchParams();
	const [is12HourFormat, setIs12HourFormat] = useState(true);
	const [textInput, setTextInput] = useState('');
	const scrollViewRef = useRef<ScrollView>(null);
	const [firstTime, setFirstTime] = useState(true);
	const [chats, setChats] = useState([
		{
			user: 'user@gmail.com',
			_id: '3947324934',
			message: 'Hello There! are you up for work?',
			createdAt: '2024-05-28T17:48:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947359341',
			message: 'Sure, let me check my schedule.',
			createdAt: '2024-05-28T17:49:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324935',
			message: 'Great! Let me know if you are available.',
			createdAt: '2024-05-28T17:50:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324936',
			message: 'I am available. What do you need?',
			createdAt: '2024-05-28T17:51:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324937',
			message: 'I need help with a project deadline.',
			createdAt: '2024-05-28T17:52:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '39473242938',
			message: 'Hmmm',
			createdAt: '2024-05-28T17:53:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324938',
			message: 'Got it. Let’s discuss the details.',
			createdAt: '2024-05-28T17:53:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324939',
			message: 'Can we have a call at 5 PM?',
			createdAt: '2024-05-28T17:54:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324940',
			message: 'Sure, that works for me.',
			createdAt: '2024-05-28T17:55:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324938',
			message: 'Got it. Let’s discuss the details.',
			createdAt: '2024-05-28T17:53:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324939',
			message: 'Can we have a call at 5 PM?',
			createdAt: '2024-05-28T17:54:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324940',
			message: 'Sure, that works for me.',
			createdAt: '2024-05-28T17:55:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324938',
			message: 'Got it. Let’s discuss the details.',
			createdAt: '2024-05-28T17:53:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324939',
			message: 'Can we have a call at 5 PM?',
			createdAt: '2024-05-28T17:54:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324940',
			message: 'Sure, that works for me.',
			createdAt: '2024-05-28T17:55:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324938',
			message: 'Got it. Let’s discuss the details.',
			createdAt: '2024-05-28T17:53:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324939',
			message: 'Can we have a call at 5 PM?',
			createdAt: '2024-05-28T17:54:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324940',
			message: 'Sure, that works for me.',
			createdAt: '2024-05-28T17:55:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324938',
			message: 'Got it. Let’s discuss the details.',
			createdAt: '2024-05-28T17:53:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324939',
			message: 'Can we have a call at 5 PM?',
			createdAt: '2024-05-28T17:54:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324940',
			message: 'Sure, that works for me.',
			createdAt: '2024-05-28T17:55:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324938',
			message: 'Got it. Let’s discuss the details.',
			createdAt: '2024-05-28T17:53:05.610+00:00',
		},
		{
			user: 'user@gmail.com',
			_id: '3947324939',
			message: 'Can we have a call at 5 PM?',
			createdAt: '2024-05-28T17:54:05.610+00:00',
		},
		{
			user: 'john@gmail.com',
			_id: '3947324940',
			message: 'Sure, that works for me.',
			createdAt: '2024-05-28T17:55:05.610+00:00',
		},
	]);

	const message = messages?.find(message => message._id === message_id);

	useEffect(() => {
		const timeString = new Date().toLocaleTimeString();

		setIs12HourFormat(
			timeString.toLowerCase().includes('am') ||
				timeString.toLowerCase().includes('pm')
		);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (scrollViewRef.current) {
				scrollViewRef.current.scrollToEnd({animated: !firstTime});
			}
			setFirstTime(false);
		}, 0);
	}, [chats]);

	if (!message) {
		return (
			<View>
				<Text className="text-black font-bold text-lg capitalize">
					No found message user ID
				</Text>
			</View>
		);
	}

	const handleSubmit = () => {
		if (textInput) {
			setChats(prev => [
				...prev,
				{
					user: 'user@gmail.com',
					_id: randomUUID(),
					message: textInput,
					createdAt: new Date().toISOString(),
				},
			]);
			setTextInput('');
		}
		Keyboard.dismiss();
	};
	return (
		<TouchableWithoutFeedback
			onPress={() => Keyboard.dismiss()}
			touchSoundDisabled
		>
			<>
				<View className="flex-row gap-x-5 items-center px-5 py-6 border-b-2 border-[#eee]">
					<Pressable onPress={() => router.back()}>
						<BackArrow />
					</Pressable>
					<View>
						<Text className="text-black font-bold text-lg capitalize">
							{message.name}
						</Text>
						<Text className="opacity-50 font-semibold">Online</Text>
					</View>
					<View className="flex-1 items-end">
						<ThreeDotsIcon />
					</View>
				</View>

				<ScrollView
					contentContainerStyle={{flexGrow: 1, justifyContent: 'flex-end'}}
					ref={scrollViewRef}
				>
					<View className="px-[5%] py-8 flex-1">
						{chats.map(chat => (
							<Chat
								key={chat._id + Math.random()}
								chat={chat}
								is12HourFormat={is12HourFormat}
							/>
						))}
					</View>
				</ScrollView>
				<KeyboardAvoidingView
					behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					keyboardVerticalOffset={Platform.OS === 'ios' ? 45 : 0}
				>
					<View className="flex-row gap-x-5 items-center px-5 py-6 border-t-2 border-[#eee] bg-white">
						<TextInput
							onChangeText={text => setTextInput(text)}
							value={textInput}
							placeholder={'Message...'}
							placeholderTextColor={'#ccc'}
							className={`${
								isClient ? 'bg-[#f3f5ff]' : 'bg-[#fff5f6]'
							} flex-1 h-10 border-2 border-[#fff5f6] rounded-lg px-3`}
						/>
						<FileSelectIcon color={isClient ? '#2F3C7E' : '#EA1588'} />
						<Pressable onPress={handleSubmit}>
							<SendIcon color={isClient ? '#2F3C7E' : '#EA1588'} />
						</Pressable>
					</View>
				</KeyboardAvoidingView>
			</>
		</TouchableWithoutFeedback>
	);
};

export default MessageChat;

const Chat: FC<{chat: ChatProps; is12HourFormat: boolean}> = ({
	chat,
	is12HourFormat,
}) => {
	const {isClient} = useContext(AppContext);
	const user = {
		user: 'user@gmail.com',
	};

	const getTimeFormatted = (date: Date) => {
		return new Intl.DateTimeFormat(undefined, {
			hour: 'numeric',
			minute: 'numeric',
			hour12: is12HourFormat,
		}).format(date);
	};

	const chatTime = getTimeFormatted(new Date(chat.createdAt));

	return (
		<View className="mb-5">
			{chat.user === user.user ? (
				<View>
					<View
						className={`${
							isClient ? 'bg-[#f3f5ff]' : 'bg-[#fff5f6]'
						} p-5 w-fit ml-auto max-w-[70%] rounded-xl`}
					>
						<Text>{chat.message}</Text>
					</View>
					<Text className="text-right mr-2 mt-2 opacity-50 font-semibold">
						{chatTime}
					</Text>
				</View>
			) : (
				<View>
					<View
						className={`${
							isClient ? 'bg-[#f3f5ff]' : 'bg-[#fff5f6]'
						} p-5 w-fit max-w-[70%] rounded-xl`}
					>
						<Text>{chat.message}</Text>
					</View>
					<Text className="ml-2 mt-2 opacity-50 font-semibold">{chatTime}</Text>
				</View>
			)}
		</View>
	);
};
