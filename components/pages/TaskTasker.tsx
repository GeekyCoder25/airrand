import FilterIcon from '@/assets/images/icons/filter-icon';
import {useRouter} from 'expo-router';
import {FC} from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';

export interface TaskType {
	_id: string;
	title: string;
	desc: string;
	time: string | number;
	status: 'active' | 'in-progress' | 'completed' | 'cancelled' | string;
	price: number;
	user: {
		fullName: string;
		avatar?: string;
		isCertified: boolean;
	};
	image?: string;
	location?: number;
}

export const tasks: TaskType[] = [
	{
		_id: '309489',
		title: 'professional web designer',
		desc: 'designed a professional wordpress website.',
		status: 'active',
		time: Date.now(),
		price: 20000,
		user: {
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
		},
	},
	{
		_id: '309d1w489',
		title: 'experience wordpress designer',
		desc: 'designed a professional wordpress website.',
		status: 'cancelled',
		time: Date.now(),
		price: 1200,
		user: {
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
		},
	},
	{
		_id: '3094r389',
		title: 'wordpress theme',
		desc: 'designed a professional wordpress website.',
		status: 'completed',
		time: Date.now(),
		price: 8000,
		user: {
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
		},
	},
];

export default function TaskTasker() {
	if (!tasks.length) {
		return (
			<View className="flex-1 px-[5%] gap-y-5 py-5">
				<View className="gap-x-2 flex-row items-center justify-between mb-5">
					<Text className="text-black font-bold text-2xl">All Tasks</Text>
					<FilterIcon />
				</View>
				<View className="flex-1 justify-center items-center">
					<Text>There're no new tasks at the moment</Text>
				</View>
			</View>
		);
	}

	return (
		<ScrollView className="flex-1 px-[5%] gap-y-5 py-5">
			<View className="gap-x-2 flex-row items-center justify-between mb-5">
				<Text className="text-black font-bold text-2xl">All Tasks</Text>
				<FilterIcon />
			</View>
			<View>
				{tasks.map(task => (
					<Task key={task._id} task={task} />
				))}
			</View>
		</ScrollView>
	);
}

const Task: FC<{task: TaskType}> = ({task}) => {
	const router = useRouter();
	return (
		<Pressable
			onPress={() => router.navigate(`/task-details/${task._id}`)}
			className="border-2 border-[#FFF5F6] p-3 rounded-lg mb-8"
		>
			<View className="">
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
			<View className="flex-1">
				<Text className="font-bold text-xl text-[#000] capitalize">
					{task.title}
				</Text>
				<Text className="font-medium text-light text-[#000] opacity-50 capitalize">
					{task.desc}
				</Text>
			</View>
			<View className="mt-3">
				<View className="flex-row gap-x-10">
					<Text className="font-semibold">
						<Text className="text-[#EA1588]">Date:</Text>
						{'   '}
						{new Date(task.time).toLocaleTimeString()}
					</Text>
					<Text className="font-semibold">
						<Text className="text-[#EA1588]">Price:</Text>
						{'   '} ₦{task.price.toLocaleString()}
					</Text>
				</View>
				<View></View>
			</View>
		</Pressable>
	);
};
