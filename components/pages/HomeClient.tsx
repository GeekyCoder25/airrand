import CleaningIcon from '@/assets/images/icons/cleaning-icon';
import CookingIcon from '@/assets/images/icons/cooking-ixon';
import DeliveryIcon from '@/assets/images/icons/delivery-icon';
import DesignIcon from '@/assets/images/icons/design-icon';
import ElectricalIcon from '@/assets/images/icons/electrical-icon';
import ErrandsIcon from '@/assets/images/icons/errands-icon';
import HomeIconClient from '@/assets/images/icons/home-icon-client';
import IroningIcon from '@/assets/images/icons/ironing-icon';
import PaintingIcon from '@/assets/images/icons/painting-icon';
import PetIcon from '@/assets/images/icons/pet-icon';
import PhotographyIcon from '@/assets/images/icons/photography-icon';
import PlumbingIcon from '@/assets/images/icons/plumbing-icon';
import RepairIcon from '@/assets/images/icons/repair-icon';
import ShoppingIcon from '@/assets/images/icons/shopping-icon';
import TranslationIcon from '@/assets/images/icons/translation-icon';
import TransportIcon from '@/assets/images/icons/transport-icon';
import TutoringIcon from '@/assets/images/icons/tutoring-icon';
import {router} from 'expo-router';
import {View, Text, ScrollView, Dimensions, Pressable} from 'react-native';

export default function HomeClient() {
	const routes = [
		{
			route: '',
			label: 'Design',
			icon: <DesignIcon />,
		},
		{
			route: '',
			label: 'Cleaning',
			icon: <CleaningIcon />,
		},
		{
			route: '',
			label: 'Pet Care',
			icon: <PetIcon />,
		},
		{
			route: '',
			label: 'Painting',
			icon: <PaintingIcon />,
		},
		{
			route: '',
			label: 'Electrical',
			icon: <ElectricalIcon />,
		},
		{
			route: '',
			label: 'Transport',
			icon: <TransportIcon />,
		},
		{
			route: '',
			label: 'Shopping',
			icon: <ShoppingIcon />,
		},
		{
			route: '',
			label: 'Delivery',
			icon: <DeliveryIcon />,
		},
		{
			route: '',
			label: 'Errands',
			icon: <ErrandsIcon />,
		},
		{
			route: '',
			label: 'Ironing',
			icon: <IroningIcon />,
		},
		{
			route: '',
			label: 'Repair',
			icon: <RepairIcon />,
		},
		{
			route: '',
			label: 'Translation',
			icon: <TranslationIcon />,
		},
		{
			route: '',
			label: 'Tutoring',
			icon: <TutoringIcon />,
		},
		{
			route: '',
			label: 'Cooking',
			icon: <CookingIcon />,
		},
		{
			route: '',
			label: 'Plumbing',
			icon: <PlumbingIcon />,
		},
		{
			route: '',
			label: 'Photography',
			icon: <PhotographyIcon />,
		},
	];

	return (
		<ScrollView className="flex-1 px-[3%] gap-y-5">
			<View className="mt-6 bg-secondary p-10 rounded-xl flex-row justify-between">
				<View className="gap-y-2">
					<Text className="text-white font-bold text-2xl">
						Welcome Back <Text className="text-primary">John !!</Text>
					</Text>
					<Text className="capitalize text-white">
						here is the best time to take hands.
					</Text>
				</View>
			</View>

			<View className="gap-y-5 my-4">
				<Text className="font-bold text-xl capitalize">
					what do you need help with?
				</Text>

				<View className="flex-wrap gap-5 flex-row items-center justify-around">
					{routes.map(route => (
						<Pressable
							onPress={() => router.push('post-task')}
							key={route.label}
							className="items-center gap-y-3"
						>
							<View className="bg-secondary p-5 rounded-full w-16 h-16 justify-center items-center">
								{route.icon}
							</View>
							<Text className="text-black font-bold">{route.label}</Text>
						</Pressable>
					))}
				</View>
			</View>
		</ScrollView>
	);
}
