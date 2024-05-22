import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import HomeIcon from '@/assets/images/icons/home-icon';
import SearchIcon from '@/assets/images/icons/search-icon';
import MessageIcon from '@/assets/images/icons/message-icon';
import TaskIcon from '@/assets/images/icons/task-icon';
import SettingsIcon from '@/assets/images/icons/settings-icon';
import Navbar from '@/components/Navbar';
import {StatusBar} from 'expo-status-bar';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<>
			<Tabs
				screenOptions={{
					tabBarActiveTintColor: '#EA1588',
					tabBarInactiveTintColor: '#000',

					header: ({route}) => <Navbar routeName={route.name} />,
				}}
			>
				<Tabs.Screen
					name="index"
					options={{
						title: 'Home',
						tabBarIcon: ({color}) => <HomeIcon color={color} />,
					}}
				/>
				<Tabs.Screen
					name="search"
					options={{
						title: 'Search',
						tabBarIcon: ({color}) => <SearchIcon color={color} />,
					}}
				/>
				<Tabs.Screen
					name="message"
					options={{
						title: 'Message',
						tabBarIcon: ({color}) => <MessageIcon color={color} />,
					}}
				/>
				<Tabs.Screen
					name="task"
					options={{
						title: 'Task',
						tabBarIcon: ({color}) => <TaskIcon color={color} />,
					}}
				/>
				<Tabs.Screen
					name="settings"
					options={{
						title: 'Settings',
						tabBarIcon: ({color}) => <SettingsIcon color={color} />,
					}}
				/>
			</Tabs>
		</>
	);
}
