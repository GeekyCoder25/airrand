import FilterIcon from '@/assets/images/icons/filter-icon';
import RefreshIcon from '@/assets/images/icons/refresh-icon';
import {router} from 'expo-router';
import {FC} from 'react';
import {
	Image,
	View,
	Text,
	ScrollView,
	Dimensions,
	Pressable,
} from 'react-native';

export const requests = [
	{
		_id: 'o23i3o32p',
		title: 'looking for an experience designer',
		message: 'Hello everyone! I’m looking for an experience graphics designer',
		price: 200,
		period: 0.5,
		location: 'remote',
		user: {
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
		},
	},
	{
		_id: 'o23i3o34p',
		title: 'web designer',
		message: 'Hello everyone! I’m looking for an experience graphics designer',
		price: 0,
		period: 12,
		location: 'remote',
		user: {
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
		},
	},
	{
		_id: 'o23i3s32p',
		title: 'professional banner designer',
		message: 'Hello everyone! I’m looking for an experience graphics designer',
		price: 10000,
		period: 60,
		location: 'remote',
		user: {
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
		},
	},
	{
		_id: 'o23i3532p',
		title: 'professional banner designer',
		message: 'Hello everyone! I’m looking for an experience graphics designer',
		price: 200,
		image: '',
		period: 2,
		location: 'remote',
		user: {
			fullName: 'john doe',
			avatar: '',
			isCertified: true,
		},
	},
];

export default function HomeScreen() {
	const updates = [
		{
			imageUrl:
				'https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg?w=1380&t=st=1716158875',
		},
		{
			imageUrl:
				'https://www.shutterstock.com/shutterstock/photos/2273914407/display_1500/stock-vector-brutalist-abstract-geometric-shapes-and-grids-brutal-contemporary-figure-star-oval-spiral-flower-2273914407.jpg',
		},
		{
			imageUrl:
				'https://img.freepik.com/free-vector/gradient-abstract-background_23-2149131346.jpg?w=1380&t=st=1716158919',
		},
	];

	return (
		<ScrollView className="flex-1 px-[3%] gap-y-5">
			<View className="mt-6 bg-[#EA1588] p-5 rounded-xl flex-row justify-between">
				<View className="gap-y-2">
					<Text className="text-white font-bold text-2xl">
						Welcome John !!!
					</Text>
					<Text className="capitalize text-white">
						you’re one way in. complete your KYC verification
					</Text>
				</View>
				<View>
					<Text className="text-white capitalize underline font-bold">
						get started
					</Text>
				</View>
			</View>

			<View>
				<View className="flex-row gap-x-1 my-4">
					<Text className="font-bold text-xl text-[#000]">Latest</Text>
					<Text className="font-bold text-xl text-[#EA1588]">Update</Text>
				</View>

				<ScrollView horizontal className="max-h-40">
					<View className="flex-row gap-x-5">
						{updates.map(update => (
							<View key={update.imageUrl}>
								<Image
									source={{uri: update.imageUrl}}
									className="w-40 h-40 rounded-3xl"
								/>
							</View>
						))}
					</View>
				</ScrollView>
			</View>
			<View>
				<View className="my-4 flex-row justify-between">
					<View className="gap-y-2">
						<View className="flex-row gap-x-1">
							<Text className="font-bold text-xl text-[#000]">Clients</Text>
							<Text className="font-bold text-xl text-[#EA1588]">Request</Text>
						</View>
						<Text className="opacity-70 font-bold text-base capitalize">
							send your offer to your clients
						</Text>
					</View>
					<View className="flex-row gap-x-3">
						<RefreshIcon />
						<FilterIcon />
					</View>
				</View>
				<View>
					{requests.map(request => (
						<ClientRequest key={request._id} request={request} />
					))}
				</View>
			</View>
		</ScrollView>
	);
}

const ClientRequest: FC<{
	request: {
		_id: string;
		title: string;
		message: string;
		price: number;
		period: number;
		location: 'remote' | 'onsite' | string;
	};
}> = ({request}) => {
	let message = request.message;
	const vw = Dimensions.get('screen').width * 0.1;
	if (message.length > vw) {
		const messageArray = message.split(' ').join(',').slice(0, vw).split(',');
		messageArray.pop();
		message = messageArray.join(' ') + '....';
	}

	return (
		<View className="border-2 border-[#FFF5F6] p-3 rounded-lg mb-5">
			<Text className="font-bold text-xl text-[#000] text-right">
				Price: {request.price || 'Undefined'}
			</Text>
			<Text className="font-bold text-xl text-[#000] capitalize">
				{request.title}
			</Text>
			<Text className="font-semibold text-lg text-[#000] opacity-40">
				{message}
			</Text>
			<Pressable
				onPress={() => router.navigate(`/project-details/${request._id}`)}
			>
				<Text className="font-bold text-sm text-[#EA1588] text-right">
					Show Details
				</Text>
			</Pressable>
		</View>
	);
};
