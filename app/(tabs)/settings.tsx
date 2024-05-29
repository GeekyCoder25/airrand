import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import SwitchOnIcon from '@/assets/images/icons/switch-on-icon';
import ChevronRightIcon from '@/assets/images/icons/chevron-right-icon';
import LogoutIcon from '@/assets/images/icons/logout-icon';
import {router, useRouter} from 'expo-router';

export default function Settings() {
	const {replace} = useRouter();
	const settingsRoutes = [
		{
			route: '/wallet',
			label: 'wallet',
		},
		{
			route: '/profile',
			label: 'profile',
		},
		{
			route: '/referral',
			label: 'referrals',
		},
		{
			route: '/community',
			label: 'community',
		},
		{
			route: '/availability',
			label: 'availability',
		},
	];
	return (
		<ScrollView>
			<View className="px-[5%] flex-1 py-5">
				<View className="mb-5">
					<Text className="text-black font-bold text-xl">Account Type</Text>
				</View>
				<View className="border-2 border-[#FFF5F6] p-3 rounded-lg mb-8 flex-row items-center justify-between">
					<Text className="text-black font-bold text-base">As A Client</Text>
					<SwitchOnIcon />
				</View>

				<View className="gap-x-2 flex-row items-center justify-between mb-5">
					<Text className="text-black font-bold text-xl">General Settings</Text>
				</View>
				<View className="gap-y-8">
					{settingsRoutes.map(settingsRoute => (
						<Pressable
							key={settingsRoute.label}
							onPress={() => router.navigate(settingsRoute.route)}
							className="border-2 border-[#FFF5F6] p-3 rounded-lg flex-row items-center justify-between"
						>
							<Text className="text-black font-bold text-base capitalize">
								{settingsRoute.label}
							</Text>
							<ChevronRightIcon />
						</Pressable>
					))}
				</View>
				<Pressable
					className="bg-[#EA1588] flex-row gap-x-2 py-5 rounded-2xl justify-center items-center mt-16"
					onPress={() => replace('onboarding1')}
				>
					<LogoutIcon />
					<Text className="text-white font-bold">Log Out</Text>
				</Pressable>
			</View>
		</ScrollView>
	);
}
