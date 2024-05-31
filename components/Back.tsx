import {View, Text, Pressable} from 'react-native';
import React from 'react';
import BackArrow from '@/assets/images/icons/back-arrow';
import {router} from 'expo-router';

const Back = ({routeName}: {routeName?: string}) => {
	return (
		<Pressable
			onPress={() => router.back()}
			className="flex-row gap-x-5 items-center px-5 py-6 border-b-2 border-[#eee]"
		>
			<BackArrow />
			<Text className="text-black font-bold text-lg capitalize">
				{routeName || 'Back'}
			</Text>
		</Pressable>
	);
};

export default Back;
