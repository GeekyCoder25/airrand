import {Text, View} from 'react-native';
import React, {FC, useContext} from 'react';
import ChevronRightIcon from '@/assets/images/icons/chevron-right-icon';
import {AppContext} from '@/context/AppContext';

const SettingsPage = () => {
	const routes = [
		{
			label: 'Change Language',
		},
		{
			label: 'Change Currency',
		},
		{
			label: 'Delete Account',
		},
	];
	return (
		<View className="px-[5%] flex-1 py-12   ">
			{routes.map(route => (
				<Route key={route.label} route={route} />
			))}
		</View>
	);
};

export default SettingsPage;

const Route: FC<{route: {label: string}}> = ({route}) => {
	const {isClient} = useContext(AppContext);
	return (
		<View
			className={`flex-row items-center justify-between p-5 border-[0.5px] ${
				isClient ? 'border-secondary' : 'border-primary'
			} rounded-md mb-6`}
		>
			<Text
				className={`font-bold ${
					route.label.includes('Delete') ? 'text-red-500' : 'text-black'
				}`}
			>
				{route.label}
			</Text>
			<ChevronRightIcon />
		</View>
	);
};
