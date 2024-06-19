import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useContext} from 'react';
import ChevronRightIcon from '@/assets/images/icons/chevron-right-icon';
import {AppContext} from '@/context/AppContext';

const AboutUs = () => {
	const routes = [
		{
			label: 'About Us',
		},
		{
			label: 'Our Team',
		},
		{
			label: 'Our Partner',
		},
	];

	return (
		<View className="px-[5%] flex-1 py-12">
			{routes.map(route => (
				<Route key={route.label} route={route} />
			))}
		</View>
	);
};

export default AboutUs;

const Route: FC<{route: {label: string}}> = ({route}) => {
	const {isClient} = useContext(AppContext);
	return (
		<View
			className={`flex-row items-center justify-between p-5 border-[0.5px] ${
				isClient ? 'border-secondary' : 'border-primary'
			} rounded-md mb-6`}
		>
			<Text className="font-bold">{route.label}</Text>
			<ChevronRightIcon />
		</View>
	);
};
