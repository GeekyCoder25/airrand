import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HamburgerIcon from '@/assets/images/icons/hamburger-icon';
import LogoIcon from '@/assets/images/icons/logo-icon';
import NotificationIcon from '@/assets/images/icons/notification-icon';
import Sidebar from './Sidebar';
import VerifiedIcon from '@/assets/images/icons/verified-icon';
import GiveawayIcon from '@/assets/images/icons/giveaway-icon';
import {useRouter} from 'expo-router';

const Navbar = ({routeName}: {routeName: string}) => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);
	const isVerified = true;
	const router = useRouter();

	return (
		<>
			<View className="bg-[#8b8b8b11] pb-[2px]">
				<View className="p-5 flex-row justify-between items-center bg-white">
					<Pressable onPress={() => setIsSidebarVisible(true)}>
						<HamburgerIcon />
					</Pressable>
					{routeName === 'index' ? (
						<LogoIcon />
					) : (
						<Text className="text-black font-bold text-lg capitalize">
							{routeName}
						</Text>
					)}
					<View className="flex-row items-center gap-x-4">
						<GiveawayIcon />
						<Pressable onPress={() => router.navigate('/notification')}>
							<NotificationIcon />
						</Pressable>
						<View>
							<Image
								source={{
									uri: 'https://toyib.vercel.app/static/media/profileavatar.0d99c3ae75efbac1342f.png',
								}}
								className="w-7 h-7 rounded-full bg-[#c5c2bd]"
							/>
							{isVerified && (
								<VerifiedIcon className="absolute -bottom-1 left-0" />
							)}
						</View>
					</View>
				</View>
			</View>
			{isSidebarVisible && (
				<Sidebar setIsSidebarVisible={setIsSidebarVisible} />
			)}
		</>
	);
};

export default Navbar;

const styles = StyleSheet.create({});
