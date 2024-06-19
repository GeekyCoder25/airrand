import {AppContext} from '@/context/AppContext';
import {router} from 'expo-router';
import {FC, useContext} from 'react';
import {View, Text, Dimensions, Pressable} from 'react-native';
import HomeClient from '@/components/pages/HomeClient';
import HomeTasker from '@/components/pages/HomeTasker';

export default function HomeScreen() {
	const {isClient} = useContext(AppContext);

	return isClient ? <HomeClient /> : <HomeTasker />;
}
