import {Tabs} from 'expo-router';
import React, {useContext} from 'react';
import Navbar from '@/components/Navbar';
import {AppContext} from '@/context/AppContext';
import TabBarClient from '@/components/TabBarClient';
import TabBarTasker from '@/components/TabBarTasker';

export default function TabLayout() {
	const {isClient} = useContext(AppContext);

	return isClient ? (
		<Tabs
			screenOptions={{
				header: ({route}) => <Navbar routeName={route.name} />,
			}}
			tabBar={props => <TabBarClient props={props} />}
		>
			<Tabs.Screen
				name="task"
				options={{header: () => <Navbar routeName="post" />}}
			/>
			<Tabs.Screen name="message" />
			<Tabs.Screen name="index" />
			<Tabs.Screen
				name="settings"
				options={{header: () => <Navbar routeName="notification" />}}
			/>
			<Tabs.Screen name="search" />
		</Tabs>
	) : (
		<Tabs
			screenOptions={{
				header: ({route}) => <Navbar routeName={route.name} />,
			}}
			tabBar={props => <TabBarTasker props={props} />}
		>
			<Tabs.Screen name="index" />
			<Tabs.Screen name="search" />
			<Tabs.Screen name="message" />
			<Tabs.Screen name="task" />
			<Tabs.Screen name="settings" />
		</Tabs>
	);
}
