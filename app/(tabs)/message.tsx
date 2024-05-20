import FilterIcon from '@/assets/images/icons/filter-icon';
import ReadIcon from '@/assets/images/icons/read-icon';
import {FC} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';

export default function Messages() {
	const messages = [
		{
			_id: '309489',
			name: 'adam akintoye',
			message: 'hi alimi! can you help with that?',
			time: Date.now(),
			avatar:
				'https://toyib.vercel.app/static/media/profileavatar.0d99c3ae75efbac1342f.png',
		},
		{
			_id: '309d1w489',
			name: 'adam akintoye',
			message: 'hi alimi! can you help with that?',
			time: Date.now(),
			avatar:
				'https://toyib.vercel.app/static/media/profileavatar.0d99c3ae75efbac1342f.png',
		},
		{
			_id: '3094r389',
			name: 'adam akintoye',
			message: 'hi alimi! can you help with that?',
			time: Date.now(),
			avatar:
				'https://toyib.vercel.app/static/media/profileavatar.0d99c3ae75efbac1342f.png',
		},
	];

	if (!messages.length) {
		return (
			<View className="flex-1 px-[3%] gap-y-5 py-5">
				<View className="gap-x-2 flex-row items-center justify-between mb-5">
					<Text className="text-black font-bold text-2xl">All Message</Text>
					<FilterIcon />
				</View>
				<View className="flex-1 justify-center items-center">
					<Text>There're no new messages at the moment</Text>
				</View>
			</View>
		);
	}

	return (
		<ScrollView className="flex-1 px-[3%] gap-y-5 py-5">
			<View className="gap-x-2 flex-row items-center justify-between mb-5">
				<Text className="text-black font-bold text-2xl">All Message</Text>
				<FilterIcon />
			</View>
			<View>
				{messages.map(message => (
					<Message key={message._id} message={message} />
				))}
			</View>
		</ScrollView>
	);
}

const Message: FC<{
	message: {
		_id: string;
		name: string;
		message: string;
		time: string | number;
		avatar?: string;
	};
}> = ({message}) => {
	let messageContent = message.message;
	const vw = Dimensions.get('screen').width * 0.1;
	if (messageContent.length > vw) {
		const messageArray = messageContent
			.split(' ')
			.join(',')
			.slice(0, vw)
			.split(',');
		messageArray.pop();
		messageContent = messageArray.join(' ') + '....';
	}

	return (
		<View className="border-2 border-[#FFF5F6] pb-3 pr-3 rounded-lg mb-8 flex-row justify-between gap-3">
			<View className="flex-row flex-1 items-center gap-x-3">
				<View>
					<Image
						source={{
							uri:
								message.avatar ||
								'https://toyib.vercel.app/static/media/profileavatar.0d99c3ae75efbac1342f.png',
						}}
						className="w-14 h-14 rounded-full bg-[#e2d7d3]"
					/>
				</View>
				<View className="">
					<Text className="font-bold text-xl text-[#000] capitalize">
						{message.name}
					</Text>
					<Text className="font-medium text-base text-[#000] opacity-50 capitalize">
						{messageContent}
					</Text>
				</View>
			</View>
			<View className="justify-between items-end">
				<Text className="font-medium opacity-50 text-sm text-right">
					{new Date(message.time).toLocaleTimeString()}
				</Text>
				<ReadIcon />
			</View>
		</View>
	);
};
