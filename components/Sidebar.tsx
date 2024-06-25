import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {Dispatch, SetStateAction, useContext} from 'react';
import LogoIcon from '@/assets/images/icons/logo-icon';
import CloseIcon from '@/assets/images/icons/close-icon';
import {Link, useRouter} from 'expo-router';
import LogoutIcon from '@/assets/images/icons/logout-icon';
import SwitchOnIcon from '@/assets/images/icons/switch-on-icon';
import {AppContext} from '@/context/AppContext';
import Button from './Button';

const Sidebar = ({
	setIsSidebarVisible,
}: {
	setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}) => {
	const {isClient, setIsClient} = useContext(AppContext);
	const {replace} = useRouter();
	const sidebarLinks = [
		{
			link: '/accountSignup',
			label: 'account info.',
		},
		{
			link: '/about us',
			label: 'about us',
		},
		{
			link: '/settings-page',
			label: 'settings',
		},
		{
			link: '/support',
			label: 'support',
		},
		{
			link: '/feedback',
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
		...(isClient
			? [
					{
						link: '/community',
						label: 'Community',
					},
			  ]
			: []),
	];

	return (
		<Modal transparent className="flex-1">
			<Pressable
				onPress={() => setIsSidebarVisible(false)}
				className="flex-1 w-full h-full bg-[#000] opacity-50 absolute"
			/>
			<View className="flex-1 bg-white w-8/12 py-10 px-8 justify-between gap-y-10">
				<View className="justify-between gap-y-10">
					<View className="flex-row justify-between items-center">
						<LogoIcon />
						<Pressable onPress={() => setIsSidebarVisible(false)}>
							<CloseIcon />
						</Pressable>
					</View>
					{isClient ? (
						<View className="flex-row justify-between items-center border-[0.2px] border-secondary p-5 rounded-lg">
							<Text className="font-bold text-xl">As A Tasker</Text>
							<Pressable onPress={() => setIsClient(prev => !prev)}>
								<SwitchOnIcon color={'#2F3C7E'} />
							</Pressable>
						</View>
					) : (
						<View className="flex-row justify-between items-center border-[0.2px] border-primary p-5 rounded-lg">
							<Text className="font-bold text-xl">As A Client</Text>
							<Pressable onPress={() => setIsClient(prev => !prev)}>
								<SwitchOnIcon />
							</Pressable>
						</View>
					)}

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
				<Button
					style=" flex-row gap-x-2 py-5 rounded-2xl justify-center items-center"
					onPress={() => {
						replace('onboarding1');
						setIsSidebarVisible(false);
					}}
				>
					<LogoutIcon />
					<Link href="/onboarding1">
						<Text className="text-white font-bold">Log Out</Text>
					</Link>
				</Button>
			</View>
		</Modal>
	);
};

export default Sidebar;

const styles = StyleSheet.create({});
