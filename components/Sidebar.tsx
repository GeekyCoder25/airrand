import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import LogoIcon from '@/assets/images/icons/logo-icon';
import CloseIcon from '@/assets/images/icons/close-icon';
import {Link} from 'expo-router';
import LogoutIcon from '@/assets/images/icons/logout-icon';
import SwitchOnIcon from '@/assets/images/icons/switchon-icon';
import {useNavigation} from '@react-navigation/native';

const Sidebar = ({
	setIsSidebarVisible,
}: {
	setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}) => {
	const {push} = useNavigation();
	const sidebarLinks = [
		{
			link: '/',
			label: 'account info.',
		},
		{
			link: '/',
			label: 'about us',
		},
		{
			link: '/settings',
			label: 'settings',
		},
		{
			link: '/support',
			label: 'support',
		},
		{
			link: '/settings',
			label: 'give feedback',
		},
		{
			link: '/settings',
			label: 'fAQ',
		},
		{
			link: '/update',
			label: 'check update',
		},
	];
	return (
		<Modal transparent className="flex-1">
			<Pressable
				onPress={() => setIsSidebarVisible(false)}
				className="flex-1 w-full h-full bg-[#000] opacity-50 absolute"
			/>
			<View className="flex-1 bg-white w-7/12 py-10 px-5 justify-between gap-y-10">
				<View className="justify-between gap-y-10">
					<View className="flex-row justify-between items-center">
						<LogoIcon />
						<Pressable onPress={() => setIsSidebarVisible(false)}>
							<CloseIcon />
						</Pressable>
					</View>

					<View className="flex-row justify-between items-center">
						<Text className="font-bold text-xl">As A Client</Text>
						<SwitchOnIcon />
					</View>

					<View className="gap-y-8">
						{sidebarLinks.map(sidebar => (
							<Link
								href={sidebar.link}
								onPress={() => setIsSidebarVisible(false)}
								className="w-full"
								key={sidebar.label}
							>
								<Text className="capitalize font-bold text-xl w-full">
									{sidebar.label}
								</Text>
							</Link>
						))}
					</View>
				</View>
				<Pressable
					className="bg-[#EA1588] flex-row gap-x-2 py-5 rounded-2xl justify-center items-center"
					onPress={() => {
						push('onboarding1');
						setIsSidebarVisible(false);
					}}
				>
					<LogoutIcon />
					<Link href='/onboarding1'><Text className="text-white font-bold">Log Out</Text></Link>
				</Pressable>
			</View>
		</Modal>
	);
};

export default Sidebar;

const styles = StyleSheet.create({});
